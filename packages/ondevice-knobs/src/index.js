import { addons } from '@storybook/manager-api';
import Panel from './panel';

export { withKnobs } from '@storybook/addon-knobs';

export function register() {
  addons.register('RNKNOBS', () => {
    const channel = addons.getChannel();
    addons.addPanel('RNKNOBS', {
      title: 'Knobs',
      // eslint-disable-next-line react/prop-types
      render: ({ active, key }) => <Panel key={key} channel={channel} active={active} />,
      paramKey: 'knobs',
    });
  });
}
