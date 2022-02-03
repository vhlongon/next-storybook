import { ComponentMeta, ComponentStory } from '@storybook/react';
import HomePage from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: HomePage,
  args: {
    name: 'All Stories default',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = args => (
  <HomePage {...args} />
);

export const Home = Template.bind({});

Home.args = {
  name: 'Home story default',
};
