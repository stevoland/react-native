module.exports = {
  stories: [
    '../components/**/*.stories.?(ts|tsx|js|jsx)',
    {
      directory: '../other_components',
      files: '**/*.stories.?(ts|tsx|js|jsx)',
      titlePrefix: 'OtherComponents',
    },
    {
      directory: '../many_components',
      files: '**/*.?(ts|tsx|js|jsx)',
      titlePrefix: 'ManyComponents',
    },
    // {
    //   directory: '../other_components',
    //   files: '**/*.storiesof.?(ts|tsx|js|jsx)',
    //   titlePrefix: 'OtherComponents',
    // },
    // '../components/**/*.storiesof.?(ts|tsx|js|jsx)',
  ],
  addons: [
    '@storybook/addon-ondevice-notes',
    '@storybook/addon-ondevice-controls',
    '@storybook/addon-ondevice-knobs',
    '@storybook/addon-ondevice-backgrounds',
    '@storybook/addon-ondevice-actions',
  ],
};
