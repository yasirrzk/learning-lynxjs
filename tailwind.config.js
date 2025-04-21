const lynxPreset = require('@lynx-js/tailwind-preset');

/** @type {import('tailwindcss').Config} */

export default {

  presets: [lynxPreset], // Use the preset

  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],

};