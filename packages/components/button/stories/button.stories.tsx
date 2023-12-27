import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";

const meta = {
    title: "Components/Button/Component",
    component: Button,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {
        variant: {
            control: {
                type: "select"
            },
            options: [
                "primary",
                "secondary",
                "warning",
                "danger",
                "outline",
                "ghost",
                "link"
            ]
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Primary",
        variant: "primary"
    }
};

export const Secondary: Story = {
    args: {
        children: "Secondary",
        variant: "secondary"
    }
};

export const Outline: Story = {
    args: {
        children: "Outline",
        variant: "outline"
    }
};

export const Icon: Story = {
    args: {
        children:
            <div className="flex justify-center items-center gap-x-3 text-white">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 48 48"><path d="M6 40V8l38 16Zm3-4.65L36.2 24 9 12.5v8.4L21.1 24 9 27Zm0 0V12.5 27Z" /></svg>
                Send
            </div>,
        variant: "outline",
        className: "border-secondary"
    }
};

export const Warning: Story = {
    args: {
        children: "Warning",
        variant: "warning"
    }
};

export const Danger: Story = {
    args: {
        children: "Danger",
        variant: "danger"
    }
};

export const Ghost: Story = {
    args: {
        children: "Ghost",
        variant: "ghost"
    }
};

export const Link: Story = {
    args: {
        children: "Link",
        variant: "link"
    }
};

export const Disabled: Story = {
    args: {
        children: "Disabled",
        variant: "secondary",
        disabled: true
    }
};
