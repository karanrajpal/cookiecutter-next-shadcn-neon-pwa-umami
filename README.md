# Next.js Typescript Cookiecutter with Shadcn, Neon DB and Umami Analytics Support
This cookiecutter lets you hit the ground running for your next frontend project.

It is a PWA installable app with React, Nextjs, Typescript, Tailwind CSS, Framer Motion and ShadCN UI with one component installed.
It also includes connection to your own Neon DB and an Umami Analytics instance

## Usage
To get started, make sure [cookiecutter is installed](https://cookiecutter.readthedocs.io/en/latest/installation.html#install-cookiecutter) on your system.
To install, you can `brew install cookiecutter`

### Neon DB
You need to setup Neon first so you can pass the Neon project's information while creating your codebase.

1. Login to Neon (Create an account if needed)
2. Create a new project [here](https://console.neon.tech/app/projects) OR use an existing project with tables
3. Go to `Dashboard` > `Connect to your Database` > click `Connect` and copy the `Database URL` value in the `.env` tab


After that, run the following command and then follow the prompts
`cookiecutter https://github.com/karanrajpal/cookiecutter-next-shadcn-neon-pwa-umami`

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
- Neon DB connection

## Make your own cookiecutter
If you want to make another cookiecutter, follow the steps at [this link](https://cookiecutter.readthedocs.io/en/latest/tutorials/tutorial2.html)

You can clone this repo and make changes for variations.
