import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "../src";
import React from "react";

const meta = {
    title: "Components/Checkbox/Component",
    component: Checkbox,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Selected: Story = {
    args: {
        children: <div className="text-white">Checkbox Checked</div>,
        selected: true
    }
};

export const NotSelected: Story = {
    args: {
        children: <div className="text-white">Checkbox Unchecked</div>,
        selected: false
    }
};
