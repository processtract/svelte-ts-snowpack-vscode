
module.exports = {
    transform: {
      '^.+\\.svelte$': ['svelte-jester', { preprocess: true }],
      "^.+\\.ts$": "ts-jest"
    },
    testMatch: [ "**/tests/**/?(*.)+(spec|test).[jt]s?(x)" ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'svelte'],
    preset: 'ts-jest',
    roots: ["./tests"],
    setupFilesAfterEnv: ["./tests/setup.ts"]
  };