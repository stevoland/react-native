module.exports = {
  stories: [
    {
      directory: '../components',
      files: '**/*.stories.?(ts|tsx|js|jsx)',
      titlePrefix: 'Components',
    },
    '../other_components/AnotherButton/AnotherButton.stories.tsx',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-knobs',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
