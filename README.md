# Svelte + Snowpack, TypeScript, SCSS, Jest with tight VSCode debugging

The goal with this template was to get the fullest, quickest, and most integrated development and debugging experience we could. We went with Snowpack because of the speed of the dev->save->recompile->reload loop. With unbundled development the browser updates are near instant. Read more about Snowpack [here](https://www.snowpack.dev/).

## What do you get with this template

- :heavy_check_mark: Chrome Debugging in VSCode: set a breakpoint, hit F5, your application is started and the breakpoint is hit.
- :heavy_check_mark: Snowpack V2 for development
- :heavy_check_mark: Svelte 3 + TypeScript + SCSS
- :heavy_check_mark: Easily importable SCSS variables setup 
- :heavy_check_mark: Jest + TypeScript for testing
- :heavy_check_mark: Prettier + Svelte configured
- :heavy_check_mark: Production bundling with Rollup
- :heavy_check_mark: (Nearly) Full debugging experience for the app itself, build, and test execution.

## Get Started

```
npx degit processtract/svelte-ts-snowpack-vscode
cd svelte-ts-snowpack-vscode
npm install
npm run dev (or select the 'Debug Application' configuration in VSCode and hit F5)
```



## Reference Projects

There are definitely some custom approaches in this template, but a few different projects were used as reference and we always want to give credit where credit is due. If you're looking for a place to start with your own setup, we'd recommend here:

- [Snowpack's Create Snowpack App - Svelte + TypeScript](https://github.com/pikapkg/snowpack/tree/master/create-snowpack-app/app-template-svelte-typescript)
- [Svelte Snowpack Testdrive](https://github.com/codechips/svelte-snowpack-testdrive)

## TODO

There is an open issue for Svelte that we'll want to watch:
[Source map line numbers are wrong when using typescript](https://github.com/sveltejs/svelte/issues/5182). Once we see this implementation we'll likely need some changes here.

In the meantime, see if there is anything we can do with debugging the Svelte file themselves. Line numbers will be off in the actual Svelte files, but that's why a lot of functionality is handled elsewhere.