import { Meta, StoryObj } from "@storybook/react";
import { Divider } from "../src";
import React from "react";

const meta = {
    title: "Components/Divider/Component",
    component: Divider,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
    decorators: [
        Story => <div className="text-white font-medium bg-secondary px-8 py-2 rounded-lg">
            Title
            <Story />
            Content
            <Story />
            Footer
        </div>
    ],
    args: {
        className: "my-3",
        orientation: "horizontal"
    }
};

export const Vertical: Story = {
    decorators: [
        Story => <div className="text-white font-medium bg-secondary px-8 h-20 py-2 rounded-lg flex gap-x-5 items-center">
            Title
            <Story />
            Content
            <Story />
            Footer
        </div>
    ],
    args: {
        className: "h-full",
        orientation: "vertical"
    }
};
