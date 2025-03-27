import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  // Создаем категорию для каждого языка
  tutorialSidebar: [
    {
      type: 'category',
      label: 'English',
      items: ['en/start'], // Указываем путь к файлу start.md в папке en
    },
    {
      type: 'category',
      label: 'Русский',
      items: ['ru/start'], // Указываем путь к файлу start.md в папке ru
    },
  ],
};

export default sidebars;
