import type { Meta } from '@storybook/react';
import { SharedGreeter } from './shared-greeter';

const Story: Meta<typeof SharedGreeter> = {
  component: SharedGreeter,
  title: 'SharedGreeter',
};
export default Story;

export const Primary = {
  args: {
    name: 'imran Baitham',
  },
};
