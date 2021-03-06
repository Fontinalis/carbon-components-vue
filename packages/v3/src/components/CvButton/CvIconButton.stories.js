import { computed } from 'vue';
import { CvIconButton } from './';
import { buttonKinds, buttonSizes } from './consts.js';
import { storybookControlsFromProps } from '../../global/storybook-utils';

import { props as commonCvButtonProps } from './CvButtonCommon';
import {
  Bee20,
  Carbon20,
  Watson20,
  IbmCloud20,
  EdtLoop20,
  IbmSecurity20,
} from '@carbon/icons-vue';

const icons = {
  Bee20,
  Carbon20,
  Watson20,
  IbmCloud20,
  EdtLoop20,
  IbmSecurity20,
};

export default {
  title: 'Components/CvIconButton',
  component: CvIconButton,
  argTypes: {
    ...storybookControlsFromProps(commonCvButtonProps),
    /**
     * \@carbon/icons-vue icon, href, svg or symbol
     */
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons),
      },
    },
    /**
     * Carbon button kind
     */
    kind: { control: { type: 'select', options: buttonKinds } },
    /**
     * Size of the button
     */
    size: { control: { type: 'select', options: buttonSizes } },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'mousedown .bx--btn', 'click'],
    },
  },
};

const Template = (args, { argTypes }) => {
  return {
    props: Object.keys(argTypes),
    components: { CvIconButton },
    template: `<cv-icon-button v-bind="$props" :icon="theIcon"/>`,
    setup(props) {
      const theIcon = computed(() => icons[props.icon]);
      return { theIcon };
    },
  };
};

export const Primary = Template.bind({});
Primary.args = {
  kind: 'primary',
  label: 'primary',
  icon: 'Bee20',
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'secondary',
  label: 'Secondary',
  icon: 'Bee20',
};

export const Field = Template.bind({});
Field.args = {
  label: 'Field size',
  size: 'field',
  icon: 'Bee20',
};

export const Small = Template.bind({});
Small.args = {
  label: 'sm',
  size: 'sm',
  icon: 'Bee20',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Large size',
  size: 'lg',
  icon: 'Bee20',
};
