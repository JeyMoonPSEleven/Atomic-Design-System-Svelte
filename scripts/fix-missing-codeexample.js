#!/usr/bin/env node

/**
 * Script para agregar codeExample faltante en archivos que fueron procesados incorrectamente
 */

import { readFileSync, writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');

// Buscar archivos con </script> fuera del script pero sin codeExample definido
function findProblematicFiles() {
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

const files = findProblematicFiles();
let fixedCount = 0;

for (const filePath of files) {
	try {
		const content = readFileSync(filePath, 'utf-8');
		
		// Verificar si tiene </script> fuera del script principal
		const scriptMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/);
		if (!scriptMatch) continue;
		
		const afterScript = content.substring(scriptMatch.index + scriptMatch[0].length);
		
		// Verificar si hay </script> después del script principal (problema)
		if (!afterScript.includes('</script>')) continue;
		
		// Verificar si codeExample está definido
		if (scriptMatch[1].includes('const codeExample')) continue;
		
		// Buscar el codeExample que quedó fuera
		const codeExampleMatch = afterScript.match(/(<script lang="ts">[\s\S]*?<\/script>)/);
		if (!codeExampleMatch) continue;
		
		// Extraer el codeExample
		let codeExample = codeExampleMatch[1];
		
		// Convertir a template literal
		codeExample = codeExample
			.replace(/^<script lang="ts">/, '')
			.replace(/<\/script>$/, '')
			.trim();
		
		// Escapar </script> dentro del codeExample
		codeExample = codeExample.replace(/<\/script>/g, '<\\/script>');
		
		// Agregar codeExample al script
		const scriptContent = scriptMatch[1];
		const newScriptContent = scriptContent.trim() + '\n\n\tconst codeExample = `' + codeExample + '`;';
		
		// Reconstruir el archivo
		const beforeScript = content.substring(0, scriptMatch.index);
		const newScript = `<script lang="ts">\n${newScriptContent}\n</script>`;
		const afterScriptFixed = afterScript.replace(codeExampleMatch[0], '').trim();
		
		const newContent = beforeScript + newScript + '\n\n' + afterScriptFixed;
		
		writeFileSync(filePath, newContent, 'utf-8');
		fixedCount++;
		console.log(`✓ Fixed: ${filePath.replace(projectRoot, '')}`);
	} catch (error) {
		console.error(`✗ Error processing ${filePath}:`, error.message);
	}
}

console.log(`\n✅ Fixed ${fixedCount} files`);

