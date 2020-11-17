# Typescript Crash Course

```sh
npm i -g typescript # install Typescript globally.
tsc -version # Check that Typescript is installed and the version number.
touch tsconfig.json # Create a TS configuration file.
tsc # transpile .ts files in the cwd using the tsconfig.json options.
npm init -y
npm i lodash
npm i -D @types/lodash # Install TS typings for lodash
```

## Compiler Options

```json
{
  "compilerOptions": {
    "target": "esnext",
    "watch": true,
    "lib": ["dom", "es2017"],
    "moduleResolution": "node"
  }
}
```
