import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // <== 確保掃描所有 src 內容
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
