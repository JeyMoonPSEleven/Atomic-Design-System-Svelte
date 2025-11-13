import '@testing-library/jest-dom';
import { expect, afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';

// Mock para $app/environment para que use browser
vi.mock('$app/environment', () => ({
	browser: true,
	dev: true,
	building: false,
	version: '0.0.0'
}));

// Limpiar después de cada test
afterEach(() => {
	cleanup();
});

