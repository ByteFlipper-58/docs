import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 */

const sidebars: SidebarsConfig = {
  // Автоматически генерируемый сайдбар для английской версии
  en: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorial-basics/create-a-document'],
    },
  ],

  // Автоматически генерируемый сайдбар для русской версии
  ru: [
    {
      type: 'category',
      label: 'Начало работы',
      items: ['getting-started'],
    },
    {
      type: 'category',
      label: 'Учебники',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};

export default sidebars;