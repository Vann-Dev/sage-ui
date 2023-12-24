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
        },
        size: {
            control: {
                type: "select"
            },
            options: [
                "sm",
                "md",
                "lg"
            ]
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        label: "Primary",
        color: "primary"
    }
};

export const Secondary: Story = {
    args: {
        label: "Secondary",
        color: "secondary"
    }
};

export const Outline: Story = {
    args: {
        label: "Outline",
        color: "outline"
    }
};

export const Warning: Story = {
    args: {
        label: "Warning",
        color: "warning"
    }
};

export const Danger: Story = {
    args: {
        label: "Danger",
        color: "danger"
    }
};

export const Ghost: Story = {
    args: {
        label: "Ghost",
        color: "ghost"
    }
};

export const Link: Story = {
    args: {
        label: "Link",
        color: "link"
    }
};

export const Disabled: Story = {
    args: {
        label: "Disabled",
        color: "primary",
        disabled: true
    }
};
