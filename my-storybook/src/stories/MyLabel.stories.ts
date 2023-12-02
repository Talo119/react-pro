import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title: 'UI/labels/MyLabel',
    component: MyLabel,
    parameters: {
        layout:'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'inline-radio' }
    }
} satisfies Meta<typeof MyLabel>;

export default meta;

type Story = StoryObj<typeof meta>

export const Basic: Story = {
    args:{
        label: 'Basic Label',
    }
};
export const AllCaps: Story = {
    args:{
        label: 'All Caps Label',
        size: 'normal',
        allCaps: true
    }
};
export const Secondary: Story = {
    args:{
        label: 'Secondary Label',
        color: 'text-secondary'
    }
};
export const CustomColor: Story = {
    args:{
        label: 'CustomColor Label',
        fontColor: '#5517ac'
    }
};