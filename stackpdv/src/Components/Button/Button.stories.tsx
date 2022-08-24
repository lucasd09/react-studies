import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Login</Button>;

export const Primary = Template.bind({});

Primary.args = {
  outlined: false,
  label: 'Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  outlined: true,
  label: 'Button',
};

