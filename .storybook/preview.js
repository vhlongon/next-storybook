import { setupWorker, rest } from 'msw';
import '../styles/globals.css';
import * as NextImage from 'next/image';

// yarn add -D msw -> to install msw
// ynpx msw init public/ --save -> to create msw worker config inside public folder

if (typeof window !== 'undefined') {
  const worker = setupWorker(
    rest.get('http://localhost:3000/api/hello', (req, res, ctx) => {
      return res(ctx.json({ name: 'Jhon Mocked' }));
    }),
  );
  worker.start();
}

const OriginalImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: props => <OriginalImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
