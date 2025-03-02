# Next.js Typescript Cookiecutter with Shadcn, Supabase and Umami Analytics Support
This cookiecutter lets you hit the ground running for your next frontend project.

It is a PWA installable app with React, Nextjs, Typescript, Tailwind CSS, Framer Motion and ShadCN UI with one component installed.
It also includes connection to your own Supabase DB and an Umami Analytics instance

## Usage
To get started, make sure [cookiecutter is installed](https://cookiecutter.readthedocs.io/en/latest/installation.html#install-cookiecutter) on your system.
To install, you can `brew install cookiecutter`

### Supabase
You need to setup Supabase first so you can pass the Supabase project's information while creating your codebase.

1. Login to Supabase (Create an account if needed)
2. Create a new project [here](https://supabase.com/dashboard/projects) OR use an existing project with new tables
3. Keep track of your DB password somewhere safe.
4. Wait for the initialization and then go to Settings -> API and be ready to copy over values from the page into the cookiecutter init script next.


After that, run the following command and then follow the prompts
`cookiecutter https://github.com/karanrajpal/cookiecutter-next-shadcn-supabase-pwa-umami`

## Features
- Next.js 14
- Tailwind enabled
- Typescript
- Shadcn initialized
- Framer Motion
- Dark Mode theme + toggle ready to go
- Metadata for SEO
- Custom Font has been setup
- Lucide Icons from https://lucide.dev/guide/packages/lucide-react
- README.md with instructions on usage and deployment
- Installable PWA
- Umami Analytics with instructions in the generated Readme
- Supabase DB connection

## Make your own cookiecutter
If you want to make another cookiecutter, follow the steps at [this link](https://cookiecutter.readthedocs.io/en/latest/tutorials/tutorial2.html)

You can clone this repo and make changes for variations.
