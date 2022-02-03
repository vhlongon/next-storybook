import { ComponentMeta, ComponentStory } from '@storybook/react';
import { IncomingMessage, ServerResponse } from 'http';
import { GetServerSidePropsContext, PreviewData } from 'next';
import { NextApiRequestCookies } from 'next/dist/server/api-utils';
import { ParsedUrlQuery } from 'querystring';
import HomePage, { getServerSideProps } from '../../pages/index';

export default {
  title: 'Pages/Home',
  component: HomePage,
  args: {
    title: 'Title default for all stories',
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (
  args,
  { loaded: { name } },
) => {
  return <HomePage {...args} name={name} />;
};

export const Home = Template.bind({});

Home.args = {
  title: 'Welcome to home story',
};

Home.loaders = [
  async () => {
    const context = {
      req: {},
      res: {},
      query: {},
      resolvedUrl: '/',
    } as GetServerSidePropsContext<ParsedUrlQuery, PreviewData>;

    const data = (await getServerSideProps(context)) as {
      props: { name: string };
    };

    return data.props;
  },
];
