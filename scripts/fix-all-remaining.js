#!/usr/bin/env node

/**
 * Script para corregir todos los archivos restantes con problemas de codeExample
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

function findShowcaseFiles() {
	try {
		const result = execSync(
			`find "${join(projectRoot, 'src/routes/showcase')}" -name "+page.svelte" -type f`,
			{ encoding: 'utf-8', cwd: projectRoot }
		);
		return result.trim().split('\n').filter(Boolean);
	} catch (error) {
		return [];
	}
}

const files = findShowcaseFiles();
let fixedCount = 0;

for (const filePath of files) {
	try {
		let content = readFileSync(filePath, 'utf-8');
		let modified = false;
		
		// Buscar el script principal
		const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
		if (!scriptMatch) continue;
		
		const scriptContent = scriptMatch[1];
		
		// Si ya tiene codeExample correctamente definido, saltar
		if (scriptContent.includes('const codeExample') && !scriptContent.includes('`;`;')) continue;
		
		// Buscar código después del script que parece ser codeExample
		const afterScript = content.substring(scriptMatch.index + scriptMatch[0].length);
		
		// Buscar patrones de codeExample fuera del script
		// Patrón: líneas que parecen código Svelte seguido de `;` y `</script>`
		const codeExamplePattern = /^[\s\n]*(<[\w]+[\s\S]*?\/>[\s\n]*`;`;[\s\n]*<\/script>)/m;
		const match = afterScript.match(codeExamplePattern);
		
		if (match) {
			// Extraer el codeExample
			let codeExampleText = match[1];
			
			// Limpiar: quitar `;` extra y `</script>`
			codeExampleText = codeExampleText.replace(/`;`;[\s\n]*<\/script>[\s\n]*$/, '');
			
			// Si no tiene <script lang="ts">, agregarlo basado en el componente
			if (!codeExampleText.includes('<script')) {
				// Intentar detectar el componente principal
				const componentMatch = codeExampleText.match(/<(\w+)/);
				if (componentMatch) {
					const componentName = componentMatch[1];
					// Determinar la ruta del componente basado en el nombre
					let importPath = '$lib/components/02-molecules';
					if (['Button', 'Input', 'Text', 'Heading', 'Avatar', 'Badge', 'Checkbox', 'Radio', 'Select', 'Slider', 'Switch', 'Image', 'Link', 'Logo', 'Progress', 'Skeleton', 'Spinner', 'Video'].includes(componentName)) {
						importPath = '$lib/components/01-atoms';
					}
					codeExampleText = `<script lang="ts">\n  import { ${componentName} } from '${importPath}';\n<\/script>\n\n${codeExampleText}`;
				}
			}
			
			// Escapar </script>
			codeExampleText = codeExampleText.replace(/<\/script>/g, '<\\/script>');
			
			// Agregar al script si no existe
			if (!scriptContent.includes('const codeExample')) {
				const newScriptContent = scriptContent.trim() + '\n\n\tconst codeExample = `' + codeExampleText + '`;';
				const newScript = `<script lang="ts">\n${newScriptContent}\n</script>`;
				
				// Reemplazar en el contenido
				content = content.substring(0, scriptMatch.index) + 
					newScript + 
					afterScript.replace(match[0], '').trim();
				
				modified = true;
			}
		}
		
		// Buscar snippets vacíos que necesitan contenido
		const emptySnippetPattern = /{#snippet\s+(\w+)\(\)\s*}\s*\n\s*{/g;
		let snippetMatch;
		while ((snippetMatch = emptySnippetPattern.exec(content)) !== null) {
			const snippetName = snippetMatch[1];
			// Buscar el componente que debería estar en este snippet
			// Por ahora, solo agregamos un comentario placeholder
			content = content.replace(
				snippetMatch[0],
				`{#snippet ${snippetName}()}\n\t<!-- TODO: Add content -->\n{/snippet}\n\n{`
			);
			modified = true;
		}
		
		if (modified) {
			writeFileSync(filePath, content, 'utf-8');
			fixedCount++;
			console.log(`✓ Fixed: ${filePath.replace(projectRoot, '')}`);
		}
	} catch (error) {
		// Silently skip errors
	}
}

console.log(`\n✅ Fixed ${fixedCount} files`);

