// vitest.config.js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Define quais arquivos o Vitest deve considerar como testes
    include: ['tests/**/*.{test,spec}.{js,ts}'],
    
    // Se quiser usar variáveis globais como 'describe' e 'it' sem importar
    globals: true,
    
    // Pasta para relatórios de cobertura (coverage)
    coverage: {
      reportsDirectory: './coverage',
      reporter: ['text', 'json', 'html'],
    },
  },
})