import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "../src";
import { Avatar } from "../../avatar/src";
import React from "react";

const meta = {
    title: "Components/Badge/Component",
    component: Badge,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TopRight: Story = {
    args: {
        children: <Avatar
            alt="Jeanice"
            name="JC"
            src="https://images.pexels.com/photos/2034538/pexels-photo-2034538.jpeg"
        />,
        badgeContent: "3",
        className: "bg-primary"
    }
};

export const TopLeft: Story = {
    args: {
        children: <Avatar
            alt="Jeanice"
            name="JC"
            src="https://i.pravatar.cc/300?u=a042581fkk4d"
        />,
        position: "top-left",
        badgeContent: "new",
        className: "bg-danger px-2 pb-1"
    }
};

export const BottomRight: Story = {
    args: {
        children: <Avatar
            alt="Jeanice"
            name="JC"
            src="https://i.pravatar.cc/300?u=4nfawf369026704d"
        />,
        position: "bottom-right",
        badgeContent: "",
        className: "bg-green-500 border-2 border-secondary"
    }
};

export const BottomLeft: Story = {
    args: {
        children: <Avatar
            alt="Jeanice"
            name="JC"
            src="https://i.pravatar.cc/300?u=a042581f43469026704d"
        />,
        badgeContent: "3",
        position: "bottom-left",
        className: "bg-secondary"
    }
};