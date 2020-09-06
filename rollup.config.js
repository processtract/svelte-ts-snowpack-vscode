
const preprocess = require('./svelte.config');

import pkg from './package.json';
import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from '@rollup/plugin-typescript';

const plugins = [
    svelte({
        dev: false,
        preprocess: preprocess.preprocess,
        emitCss: false,
        css: function (css) {
            css.write('dist/css/components.css');
        },
    }),
    resolve({
        dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/'),
        browser: true
    }),
    commonjs({ include: "node_modules/**", extensions: [".js", ".ts"] }),
    typescript({
        sourceMap: false,
        declaration: false,
        declarationMap: false
    }),
];

const name = pkg.name
    .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
    .replace(/^\w/, m => m.toUpperCase())
    .replace(/-\w/g, m => m[1].toUpperCase());


export default [
    {
        input: "src/index.ts",
        output:
            { file: pkg.module, 'format': 'es', sourcemap: false },
        plugins
    },
    {
        input: "src/index.ts",
        output:
            { file: pkg.main, 'format': 'umd', sourcemap: false, name: name },
        plugins
    }
];