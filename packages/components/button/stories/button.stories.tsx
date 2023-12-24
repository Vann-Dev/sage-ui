import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        color: {
            control: {
                type: "select"
            },
            options: [
                "primary",
                "secondary",
                "warning",
                "danger"
            ]
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary",
        color: "primary"
    }
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        color: "secondary"
    }
};

export const Outline: Story = {
    args: {
        children: "Outline",
        color: "outline"
    }
};

export const Warning: Story = {
    args: {
        children: "Warning",
        color: "warning"
    }
};

export const Danger: Story = {
    args: {
        children: "Danger",
        color: "danger"
    }
};

export const Ghost: Story = {
    args: {
        children: "Ghost",
        color: "ghost"
    }
};

export const Link: Story = {
    args: {
        children: "Link",
        color: "link"
    }
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        color: "secondary",
        disabled: true
    }
};
