# modular-plugin-epics

![NPM](https://img.shields.io/npm/l/modular-plugin-epics?label=License&style=for-the-badge)
![npm](https://img.shields.io/npm/v/modular-plugin-epics?color=orange%20&label=Latest%20version&style=for-the-badge&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/min/modular-plugin-epics?label=Package%20size&style=for-the-badge)
![Maintenance](https://img.shields.io/maintenance/yes/2025?label=Maintained&style=for-the-badge)

---

<br>

Use [redux-observable](https://redux-observable.js.org/) epics with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) system

<br>

---

## Getting started

### Installation

Check [modular-engine](https://github.com/CianciarusoCataldo/modular-engine) guide to init the system

If you want to use this plugin with [modular-engine](https://github.com/CianciarusoCataldo/modular-engine), install it:

```sh
npm i modular-plugin-epics
```

<br>

### Usage

Include this plugin inside your modular-engine config file, and optionally set the `epics` field as an array, containing all the epics you want to use:

```tsx
const epicsPlugin = require("modular-plugin-epics");

const { createModularAction } = require("modular-engine-tools");

const customActionOne = createModularAction("@@custom/action-one");

const customActionTwo = createModularAction("@@custom/action-two");

const config = {
  appName: "custom-app",
  plugins: [epicsPlugin],
  epics: [
    (actions$) =>
      actions$.pipe(filter(customActionOne), mapTo(customActionTwo)),
  ],
};

module.exports = { config };
```

<br>

---

## Integration with other plugins

- This plugin expose some fields to work with any other plugin. If you want to interact with it, using your custom plugin, just check the `enabledPlugins` parameter inside your `format` function for `epics`. If true, you can add your epics to `epics` field, as its value is an Epic array

<br>

---

## Included libraries

- [redux-observable]https://redux-observable.js.org/) - to use Epics
- [Modular-engine-types](https://github.com/CianciarusoCataldo/modular-engine-types) - to use modular-engine type definitions inside the plugin
- Modular-plugin-epics is written entirely with [Typescript](https://www.typescriptlang.org/)

<br>

---

## Authors

- [**Cataldo Cianciaruso**](https://github.com/CianciarusoCataldo)

<br>

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
