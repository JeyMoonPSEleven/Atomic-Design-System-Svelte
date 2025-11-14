#!/usr/bin/env node

/**
 * Script para corregir archivos con snippets dentro de bloques script
 * Mueve los snippets fuera del script y reorganiza el código
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Buscar todos los archivos +page.svelte en showcase usando find
function findShowcaseFiles() {
	try {
		const result = execSync(
			`find "${join(projectRoot, 'src/routes/showcase')}" -name "+page.svelte" -type f`,
			{ encoding: 'utf-8', cwd: projectRoot }
		);
		return result.trim().split('\n').filter(Boolean);
	} catch (error) {
		console.error('Error finding files:', error.message);
		return [];
	}
}

const showcaseFiles = findShowcaseFiles();

let fixedCount = 0;
let skippedCount = 0;

for (const filePath of showcaseFiles) {
	try {
		const content = readFileSync(filePath, 'utf-8');
		
		// Buscar el bloque script
		const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
		if (!scriptMatch) {
			skippedCount++;
			continue;
		}
		
		const scriptContent = scriptMatch[1];
		
		// Verificar si hay snippets dentro del script
		if (!scriptContent.includes('{#snippet')) {
			skippedCount++;
			continue;
		}
		
		// Extraer imports (todo hasta el primer const/let/{#snippet)
		const importsMatch = scriptContent.match(/^([\s\S]*?)(?=\s*(?:const|let|{#snippet))/);
		const imports = importsMatch ? importsMatch[1].trim() : '';
		
		// Extraer todas las constantes y variables (excepto codeExample y variantsWithComponents)
		const constantsMatch = scriptContent.match(/((?:const|let)\s+\w+\s*=[\s\S]*?;)/g);
		const constants = constantsMatch 
			? constantsMatch
				.filter(c => !c.includes('codeExample') && !c.includes('variantsWithComponents'))
				.join('\n\n')
			: '';
		
		// Extraer variantsWithComponents
		const variantsMatch = scriptContent.match(/(const\s+variantsWithComponents\s*=[\s\S]*?;)/);
		const variantsWithComponents = variantsMatch ? variantsMatch[1] : '';
		
		// Extraer codeExample (necesitamos escapar </script>)
		const codeExampleMatch = scriptContent.match(/(const\s+codeExample\s*=`[\s\S]*?`;)/);
		let codeExample = codeExampleMatch ? codeExampleMatch[1] : '';
		if (codeExample) {
			// Escapar </script> dentro de codeExample
			codeExample = codeExample.replace(/<\/script>/g, '<\\/script>');
		}
		
		// Crear una versión del script sin codeExample para buscar snippets
		// (los snippets dentro de codeExample no deben ser extraídos)
		let scriptWithoutCodeExample = scriptContent;
		if (codeExampleMatch) {
			// Reemplazar el codeExample con un marcador temporal
			scriptWithoutCodeExample = scriptContent.replace(
				codeExampleMatch[0],
				'__CODE_EXAMPLE_PLACEHOLDER__'
			);
		}
		
		// Extraer todos los snippets del script (excluyendo los que están en codeExample)
		const snippetRegex = /{#snippet[\s\S]*?{\/snippet}/g;
		const snippets = scriptWithoutCodeExample.match(snippetRegex) || [];
		
		// Reconstruir el script sin snippets
		const newScriptParts = [];
		if (imports) newScriptParts.push(imports);
		if (constants) newScriptParts.push(constants);
		if (variantsWithComponents) newScriptParts.push(variantsWithComponents);
		if (codeExample) newScriptParts.push(codeExample);
		
		const newScriptContent = newScriptParts.join('\n\n');
		
		// Reconstruir el archivo completo
		const beforeScript = content.substring(0, scriptMatch.index);
		const afterScript = content.substring(scriptMatch.index + scriptMatch[0].length);
		
		// Construir el nuevo contenido
		const newContent = beforeScript + 
			`<script lang="ts">\n${newScriptContent}\n</script>\n\n` +
			snippets.join('\n\n') + '\n\n' +
			afterScript.trim();
		
		writeFileSync(filePath, newContent, 'utf-8');
		fixedCount++;
		console.log(`✓ Fixed: ${filePath.replace(projectRoot, '')}`);
	} catch (error) {
		console.error(`✗ Error processing ${filePath}:`, error.message);
	}
}

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log(`⏭️  Skipped ${skippedCount} files (no issues found)`);
