import { Story, Meta } from '@storybook/react/types-6-0';

import Radio, { RadioProps } from '.';

export default {
  title: 'Form/Radio',
  component: Radio,
  decorators: [
    (Story) => (
      <div style={{ width: '40rem', margin: '0 auto', padding: '1rem 0 1rem' }}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    onCheck: {
      action: 'checked'
    },
    value: {
      type: ''
    }
  }
} as Meta;

export const Default: Story<RadioProps> = (args) => (
  <>
    <Radio
      label="Primeiro"
      name="nome"
      value="primeiro"
      defaultChecked
      {...args}
    />

    <Radio label="Segundo" name="nome" value="segundo" {...args} />

    <Radio label="Terceiro" name="nome" value="terceiro" {...args} />
  </>
);
