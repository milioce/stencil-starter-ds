export default {
    title: 'Components/Button-pluggin',
    parameters: {
        docs: {
            description: {
                component: 'Soy la **descripción** del componente Button'
            },
        },
    },
    tags: ['autodocs'],
    component: 'ds-button',
    args: {
        text: 'Button',
        outlined: true
    }
}

// Basic
const BasicTemplate = (args) => `<ds-button>${args.text}</ds-button>`;
export const Basic = BasicTemplate.bind({});

// Template with arguments
const Template = (args) => `
    <div style="display: flex; justify-content: space-evenly;">
        <div>
            <div>Solid</div>
            <ds-button color="${args.color}">${args.text}</ds-button>
        </div>
        <div>
            <div>Outline</div>
            <ds-button color="${args.color}" outline="${args.outlined}">${args.text}</ds-button>
        </div>
        <div>
            <div>Clear</div>
            <ds-button color="${args.color}">${args.text}</ds-button>
        </div>
    </div>
`;
  
export const Primary = Template.bind({});
Primary.args = {
    color: 'primary',
}

export const Secondary = Template.bind({});
Secondary.args = {
    color: 'secondary',
}

export const Tertiary = Template.bind({});
Tertiary.args = {
    color: 'tertiary',
}

// Template size
const SizeTemplate = (args) => `
<div style="display: flex; justify-content: space-evenly;">
    <div>
        <div>Small</div>
        <ds-button size="sm">${args.text}</ds-button>
    </div>
    <div>
        <div>Medium</div>
        <ds-button size="md">${args.text}</ds-button>
    </div>
    <div>
        <div>Large</div>
        <ds-button size="lg">${args.text}</ds-button>
    </div>
</div>
`;

export const Size = SizeTemplate.bind({});