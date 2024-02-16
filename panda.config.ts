import { defineConfig } from '@pandacss/dev';
import { colors } from './styles/colors';

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
    tokens: {
      colors: { ...colors },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
