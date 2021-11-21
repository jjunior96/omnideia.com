import { Story, Meta } from '@storybook/react/types-6-0';

import Checkbox, { CheckboxProps } from '.';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div
        style={{
          width: '40rem',
          margin: '0 auto'
        }}
      >
        <Story />
      </div>
    )
  ],
  argTypes: {
    value: {
      type: ''
    },
    onCheck: {
      action: 'checked'
    }
  }
} as Meta;

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <Checkbox isChecked label="Free" {...args} />

    <Checkbox label="Half price" {...args} />

    <Checkbox label="Full" {...args} />
  </>
);
