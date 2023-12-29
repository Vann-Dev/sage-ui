import { Meta, StoryObj } from "@storybook/react";
import { Code } from "../src";

const meta = {
    title: "Components/Code/Component",
    component: Code,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Secondary: Story = {
    args: {
        children: "npm i @kokoro-ui/code",
        variant: "secondary"
    }
};

export const Primary: Story = {
    args: {
        children: "npm i @kokoro-ui/code",
        variant: "primary"
    }
};

export const Danger: Story = {
    args: {
        children: "npm i @kokoro-ui/code",
        variant: "danger"
    }
};

export const Warning: Story = {
    args: {
        children: "npm i @kokoro-ui/code",
        variant: "warning"
    }
};
