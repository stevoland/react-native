import type { StorybookConfig as StorybookConfigBase } from '@storybook/core/types';
import type { ReactNativeOptions } from './Start';
export { darkTheme, theme, type Theme } from '@storybook/react-native-theming';

// @ts-ignore Workaround [TypeError: Cannot read property '__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__' of undefined]
// from @storybook/test
global.window.parent = global.window.parent || {};

export { start, prepareStories, getProjectAnnotations, updateView } from './Start';

export interface StorybookConfig {
  stories: StorybookConfigBase['stories'];
  addons: string[];
  reactNative?: ReactNativeOptions;
}
