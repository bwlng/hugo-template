# BWLNG Hugo Template

## Setup

Run `npm install` to install dev dependencies

## Local development

Start the dev server:

```bash
docker run --rm -it   -v $(pwd):/src   -p 1313:1313   klakegg/hugo:0.91.0   serve
```

Compile Tailwind styles as files are changed:

```bash
node npx tailwindcss -i ./src/css/styles.css -o ./static/css/styles.css --watch
```

## Build for production

Compile CSS:

```bash
node npx tailwindcss  -i ./src/css/styles.css  -o ./static/css/styles.css --minify
```