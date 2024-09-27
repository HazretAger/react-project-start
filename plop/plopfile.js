export default function (plop) {
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

    plop.setGenerator('entity', {
        description: 'entity template',
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
                path: "../src/entities/{{name}}/index.ts",
                templateFile: "./templates/entity/index.hbs"
            },
            {
                type: "add",
                path: "../src/entities/{{name}}/model/store/entity.store.ts",
                templateFile: "./templates/entity/entity.store.hbs"
            },
            {
                type: "add",
                path: "../src/entities/{{name}}/model/types/entity.types.ts",
                templateFile: "./templates/entity/entity.type.hbs"
            },
            {
                type: "add",
                path: "../src/entities/{{name}}/ui/{{name}}.tsx",
                templateFile: "./templates/entity/entity.hbs"
            },
            {
                type: 'add',
                path: '../src/entities/{{name}}/ui/{{name}}.module.scss',
                templateFile: './templates/entity/entity.style.hbs',
            },
        ]
    });

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