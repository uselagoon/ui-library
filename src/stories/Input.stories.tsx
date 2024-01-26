import React from "react";

import { Meta, StoryObj } from "@storybook/react";

import { default as UIFormItem } from "../components/FormItem";

import { default as UIInput } from "../components/Input";

import { Form } from "antd";

const meta: Meta<typeof UIInput> = {
  component: UIInput,
  title: "Components/FormItem + UIInput",
  argTypes: {
    name: { control: "text" },
    placeholder: { control: "text" },
  }
};

type Story = StoryObj<typeof UIInput>;

export const Default: Story = {
  args: {
    size: "large",
    placeholder: "Some placeholder",
    name: "test",
  },
};

export const WithFormItemWrapper = ({ label, inputPlaceholder }) => (
  <UIFormItem label={label}>
    <UIInput placeholder={inputPlaceholder} />
  </UIFormItem>
);

WithFormItemWrapper.args = {
  label: "Enter your value",
  inputPlaceholder: "Wrapped in 'UIFormItem' parent",
};

export const CustomizedLabelAndPlaceholder = () => (
  <WithFormItemWrapper
    label="Custom Label"
    inputPlaceholder="Custom Placeholder"
  />
);

export const WithRequiredLabel: Story = {
  render: () => (
    <Form style={{ maxWidth: "500px" }}>
      <UIFormItem required label="Enter your value">
        <UIInput placeholder="Wrapped in 'UIFormItem' with required rule" />
      </UIFormItem>
    </Form>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <Form style={{ maxWidth: "500px" }}>
      <UIFormItem
        label="Enter something"
        name="value"
        rules={[{ required: true, message: "Please input something" }]}
      >
        <UIInput placeholder="Wrapped in 'UIFormItem' with required rule" />
      </UIFormItem>
    </Form>
  ),
};

export default meta;
