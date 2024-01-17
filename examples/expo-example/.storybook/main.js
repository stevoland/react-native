module.exports = {
  stories: [
    {
      directory: '../components',
      files: '**/*.stories.?(ts|tsx|js|jsx)',
      titlePrefix: 'Components',
    },
    {
      directory: '../components2',
      files: '**/*.stories.?(ts|tsx|js|jsx)',
      titlePrefix: 'Components2',
    },
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-knobs',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
