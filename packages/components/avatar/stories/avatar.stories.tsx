import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../src";

const meta = {
    title: "Components/Avatar/Component",
    component: Avatar,
    parameters: {
        layout: "centered"
    },
    tags: ["autodocs"],
    argTypes: {

    }
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessAvatar: Story = {
    args: {
        src: "https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg",
        alt: "Juan",
        name: "JN"
    }
};

export const AnotherSuccessAvatar: Story = {
    args: {
        src: "https://images.pexels.com/photos/2034538/pexels-photo-2034538.jpeg",
        alt: "Jeanice",
        name: "JC"
    }
};

export const FallbackAvatar: Story = {
    args: {
        src: "This is fake URL",
        alt: "Juan",
        name: "JN"
    }
};

export const AnotherFallbackAvatar: Story = {
    args: {
        src: "Fake URL again",
        alt: "Jeanice",
        name: "JC"
    }
};
