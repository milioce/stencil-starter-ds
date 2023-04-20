// import notes from './readme.md';

export default {
    title: 'Components/Button-readme',
    parameters: {
        docs: {
            description: {
                component: 'Soy la **descripción** del componente Button'
            },
            // page: notes
        },
    },
    tags: ['autodocs'],
}

const Template = (args) => `<ds-button color="${args.color}" size="${args.size}">Click me</ds-button>`;
  
export const Primary = Template.bind({});