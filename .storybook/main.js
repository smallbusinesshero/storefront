const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
      '@storybook/addon-actions',
      '@storybook/addon-knobs/register', 
      '@storybook/addon-a11y/register'
  ],
};