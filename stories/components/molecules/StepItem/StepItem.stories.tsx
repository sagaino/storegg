/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable arrow-body-style */
import { Meta } from "@storybook/react";
import StepItem, {
  StepItemProps,
} from "../../../../components/molecules/StepItem";

export default {
  title: "Components/Molecules/StepItem",
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "1. Start",
  icon: "step1",
  des1: "Pilih salah satu game",
  des2: "yang ingin kamu top up",
};
