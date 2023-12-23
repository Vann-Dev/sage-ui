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
                "secondary"
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
