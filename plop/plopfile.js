export default function (plop) {
    plop.setGenerator('page', {
        description: 'Шаблон страницы',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Название страницы:'
            }
        ],
        actions: [
            {
                type: "add",
                path: "src/pages/{{name}}Page/index.ts",
                templateFile: "plop/templates/pages/index.hbs"
            },
            {
                type: "add",
                path: "src/pages/{{name}}Page/ui/{{name}}Page.async.ts",
                templateFile: "plop/templates/pages/page.async.hbs"
            },
            {
                type: "add",
                path: "src/pages/{{name}}Page/ui/{{name}}Page.tsx",
                templateFile: "plop/templates/pages/page.hbs"
            },
            {
                type: "add",
                path: "src/pages/{{name}}Page/ui/{{name}}Page.scss",
                templateFile: "plop/templates/pages/page.style.hbs"
            }
        ]
    });
};