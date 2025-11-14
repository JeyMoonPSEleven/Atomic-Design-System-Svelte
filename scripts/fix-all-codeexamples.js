#!/usr/bin/env node

/**
 * Script para corregir todos los archivos con codeExample fuera del script
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
		
		// Buscar el script principal
		const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
		if (!scriptMatch) continue;
		
		const scriptContent = scriptMatch[1];
		
		// Si ya tiene codeExample, saltar
		if (scriptContent.includes('const codeExample')) continue;
		
		// Buscar código después del script que parece ser codeExample
		const afterScript = content.substring(scriptMatch.index + scriptMatch[0].length);
		
		// Buscar patrones que indican codeExample fuera del script
		// Patrón 1: Líneas que empiezan con <ComponentName o import después del script
		const codeExamplePattern = /^[\s\n]*(<script lang="ts">[\s\S]*?<\/script>|import[\s\S]*?<\/script>|import[\s\S]*?\n\n<[\w]+)/m;
		const match = afterScript.match(codeExamplePattern);
		
		if (!match) {
			// Buscar líneas que parecen código de ejemplo (componentes Svelte)
			const componentPattern = /^[\s\n]*(<[\w]+[\s\S]*?\/>[\s\n]*`;[\s\n]*<\/script>)/m;
			const componentMatch = afterScript.match(componentPattern);
			
			if (componentMatch) {
				// Extraer el codeExample
				let codeExampleText = componentMatch[1];
				
				// Limpiar el codeExample
				codeExampleText = codeExampleText.replace(/^[\s\n]*/, '').replace(/[\s\n]*<\/script>[\s\n]*$/, '');
				
				// Si no tiene <script lang="ts">, agregarlo
				if (!codeExampleText.includes('<script')) {
					codeExampleText = `<script lang="ts">\n  import { Component } from '$lib/components/...';\n<\/script>\n\n${codeExampleText}`;
				}
				
				// Escapar </script>
				codeExampleText = codeExampleText.replace(/<\/script>/g, '<\\/script>');
				
				// Agregar al script
				const newScriptContent = scriptContent.trim() + '\n\n\tconst codeExample = `' + codeExampleText + '`;';
				const newScript = `<script lang="ts">\n${newScriptContent}\n</script>`;
				
				// Reemplazar en el contenido
				content = content.substring(0, scriptMatch.index) + 
					newScript + 
					afterScript.replace(componentMatch[0], '').trim();
				
				writeFileSync(filePath, content, 'utf-8');
				fixedCount++;
				console.log(`✓ Fixed: ${filePath.replace(projectRoot, '')}`);
			}
		}
	} catch (error) {
		// Silently skip errors
	}
}

console.log(`\n✅ Fixed ${fixedCount} files`);

