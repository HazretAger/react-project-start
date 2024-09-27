const shared = (plop) => {
    plop.setGenerator('shared', {
        description: 'shared template',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название компонента:'
            }
        ],
        actions: [
            {
                type: "add",
                path: "../src/shared/ui/{{name}}/index.ts",
                templateFile: "./templates/shared/index.hbs"
            },
            {
                type: "add",
                path: "../src/shared/ui/{{name}}/{{name}}.stories.ts",
                templateFile: "./templates/shared/shared.stories.hbs"
            },
            {
                type: "add",
                path: "../src/shared/ui/{{name}}/{{name}}.tsx",
                templateFile: "./templates/shared/shared.hbs"
            },
            {
                type: 'add',
                path: '../src/shared/ui/{{name}}/{{name}}.module.scss',
                templateFile: './templates/shared/shared.style.hbs',
            },
        ]
    });
};

module.exports = shared;