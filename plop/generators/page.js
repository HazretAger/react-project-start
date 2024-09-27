const page = (plop) => {
    plop.setGenerator('page', {
        description: 'page template',
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
                path: "../src/pages/{{name}}Page/index.ts",
                templateFile: "./templates/page/index.hbs"
            },
            {
                type: "add",
                path: "../src/pages/{{name}}Page/ui/{{name}}Page.async.ts",
                templateFile: "./templates/page/page.async.hbs"
            },
            {
                type: "add",
                path: "../src/pages/{{name}}Page/ui/{{name}}Page.tsx",
                templateFile: "./templates/page/page.hbs"
            },
            {
                type: 'add',
                path: '../src/pages/{{name}}Page/ui/{{name}}Page.module.scss',
                templateFile: './templates/page/page.style.hbs',
            },
        ]
    });
};

module.exports = page;