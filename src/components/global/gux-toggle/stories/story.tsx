import { checkA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs
} from '@storybook/addon-knobs/polymer';
import { storiesOf } from '@storybook/polymer';
import { withReadme } from 'storybook-readme';

import README from '../readme.md';

storiesOf('Genesys Components', module)
  .addDecorator(withKnobs)
  .addDecorator(checkA11y)
  .add(
    'Genesys Toggle',
    withReadme(README, () => {
      const el = document.createElement('gux-toggle');
      el.checked = boolean('checked', false);
      el.disabled = boolean('disabled', false);
      el.checkedLabel = text('checkedLabel', 'on');
      el.uncheckedLabel = text('uncheckedLabel', 'off');
      el.addEventListener('check', e => action('check')(e.detail));
      document.getElementsByTagName('html')[0].className =
        'gux-' + select('theme', ['dark', 'default'], 'default') + '-theme';
      return el;
    })
  );