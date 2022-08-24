import { ComponentStory, ComponentMeta } from '@storybook/react';

import Searchbox from '.';

export default {
  title: 'Components/Searchbox',
  component: Searchbox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Searchbox>;

const Template: ComponentStory<typeof Searchbox> = (args) => <Searchbox {...args}/>;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Pesquisar',
};