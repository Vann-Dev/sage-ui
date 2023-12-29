import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "../src";
import React from "react";

const meta = {
    title: "Components/Radio/Component",
    component: RadioGroup,
    decorators: [
        Story => <div className="w-72">
            <Story />
        </div>
    ],
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
    args: {
        label: "When JavaScript was invented",
        description: "JavaScript was invented by Brendan Eich in...",
        orientation: "vertical",
        devaultValue: "1995",
        items: [
            {
                value: "1997",
                label: "1997"
            },
            {
                value: "1995",
                label: "1995"
            },
            {
                value: "1999",
                label: "1999"
            }
        ]
    }
};

export const Horizontal: Story = {
    args: {
        label: "When JavaScript was invented",
        description: "JavaScript was invented by Brendan Eich in...",
        orientation: "horizontal",
        items: [
            {
                value: "1997",
                label: "1997"
            },
            {
                value: "1995",
                label: "1995"
            },
            {
                value: "1999",
                label: "1999"
            }
        ]
    }
};

export const VerticalWithDescription: Story = {
    args: {
        label: "Anders Hejlsberg",
        description: "Created TypScript in ...  at ...",
        orientation: "vertical",
        defaultValue: "2010-microsoft",
        items: [
            {
                value: "2010-microsoft",
                label: "2010",
                description: "At Microsoft"
            },
            {
                value: "2011-alibaba",
                label: "2011",
                description: "At alibaba"
            },
            {
                value: "2010-tokopedia",
                label: "2010",
                description: "At tokopedia"
            }
        ]
    }
};

export const HorizontalWithDescription: Story = {
    args: {
        label: "Anders Hejlsberg",
        description: "Created TypScript in ...  at ...",
        orientation: "horizontal",
        items: [
            {
                value: "2010-microsoft",
                label: "2010",
                description: "At Microsoft"
            },
            {
                value: "2011-alibaba",
                label: "2011",
                description: "At alibaba"
            },
            {
                value: "2010-tokopedia",
                label: "2010",
                description: "At tokopedia"
            }
        ]
    }
};
