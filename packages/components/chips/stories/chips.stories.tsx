import { Meta, StoryObj } from "@storybook/react";
import { Chips } from "../src";
import React from "react";

const meta = {
    title: "Components/Chips/Component",
    component: Chips,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryVariant: Story = {
    args: {
        children: "Label",
        variant: "primary"
    }
};

export const SecondaryVariant: Story = {
    args: {
        children: "Label",
        variant: "secondary"
    }
};

export const OutlineVariant: Story = {
    args: {
        children: "Label",
        variant: "outline"
    }
};

export const LabelAndTrailingIcon: Story = {
    args: {
        children:
            <div className="flex justify-center items-center gap-x-2 text-white">
                Label
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 18 18">
                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" />
                </svg>
            </div>,
        variant: "outline",
        className: "border-secondary pr-2"
    }
};

export const LeadingIconAndLabel: Story = {
    args: {
        children:
            <div className="flex justify-center items-center gap-x-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 18 18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.19 4.5075C14.04 4.065 13.62 3.75 13.125 3.75H11.25V2.25H6.75V3.75H4.875C4.38 3.75 3.9675 4.065 3.81 4.5075L2.25 9V15C2.25 15.4125 2.5875 15.75 3 15.75H3.75C4.1625 15.75 4.5 15.4125 4.5 15V14.25H13.5V15C13.5 15.4125 13.8375 15.75 14.25 15.75H15C15.4125 15.75 15.75 15.4125 15.75 15V9L14.19 4.5075ZM5.1375 5.25H12.855L13.635 7.5H4.3575L5.1375 5.25ZM13.5 12.75H14.25V9.255L14.1675 9H3.84L3.75 9.255V12.75H4.5H13.5ZM5.625 12C6.24632 12 6.75 11.4963 6.75 10.875C6.75 10.2537 6.24632 9.75 5.625 9.75C5.00368 9.75 4.5 10.2537 4.5 10.875C4.5 11.4963 5.00368 12 5.625 12ZM13.5 10.875C13.5 11.4963 12.9963 12 12.375 12C11.7537 12 11.25 11.4963 11.25 10.875C11.25 10.2537 11.7537 9.75 12.375 9.75C12.9963 9.75 13.5 10.2537 13.5 10.875Z" />
                </svg>
                Label
            </div>,
        variant: "outline",
        className: "border-secondary pl-2"
    }
};

export const LeadingIconAndLabelAndTrailingIcon: Story = {
    args: {
        children:
            <div className="flex justify-center items-center gap-x-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 18 18">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.19 4.5075C14.04 4.065 13.62 3.75 13.125 3.75H11.25V2.25H6.75V3.75H4.875C4.38 3.75 3.9675 4.065 3.81 4.5075L2.25 9V15C2.25 15.4125 2.5875 15.75 3 15.75H3.75C4.1625 15.75 4.5 15.4125 4.5 15V14.25H13.5V15C13.5 15.4125 13.8375 15.75 14.25 15.75H15C15.4125 15.75 15.75 15.4125 15.75 15V9L14.19 4.5075ZM5.1375 5.25H12.855L13.635 7.5H4.3575L5.1375 5.25ZM13.5 12.75H14.25V9.255L14.1675 9H3.84L3.75 9.255V12.75H4.5H13.5ZM5.625 12C6.24632 12 6.75 11.4963 6.75 10.875C6.75 10.2537 6.24632 9.75 5.625 9.75C5.00368 9.75 4.5 10.2537 4.5 10.875C4.5 11.4963 5.00368 12 5.625 12ZM13.5 10.875C13.5 11.4963 12.9963 12 12.375 12C11.7537 12 11.25 11.4963 11.25 10.875C11.25 10.2537 11.7537 9.75 12.375 9.75C12.9963 9.75 13.5 10.2537 13.5 10.875Z" />
                </svg>
                Label
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-white" viewBox="0 0 18 18">
                    <path d="M14.25 4.8075L13.1925 3.75L9 7.9425L4.8075 3.75L3.75 4.8075L7.9425 9L3.75 13.1925L4.8075 14.25L9 10.0575L13.1925 14.25L14.25 13.1925L10.0575 9L14.25 4.8075Z" />
                </svg>
            </div>,
        variant: "outline",
        className: "border-secondary px-2"
    }
};
