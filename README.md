# web-example

[emit](https://github.com/emit-js/emit#readme) web framework example project

![web](web.gif)

## Install

```bash
git clone git@github.com:emit/web-example.git
cd web-example
npm install
```

## What is it?

This is a web app that loads remote data and displays it, both server and client side.

✅ SSR &nbsp; ✅ Dynamic imports &nbsp; ✅ ~6 kb of JS &nbsp; 🚫 No virtual DOM! &nbsp; 🚫 No bootstrapping!

## Dev server

```bash
npm start
```

## Build & package

```bash
npm package
```

Then upload the `bundle` directory somewhere.

## Related composers

| Library    | Description          | URL                                          |
| ---------- | -------------------- | -------------------------------------------- |
| controller | DOM controller       | https://github.com/emit-js/controller#readme |
| el         | DOM elements         | https://github.com/emit-js/el#readme         |
| fetch      | Universal HTTP fetch | https://github.com/emit-js/fetch#readme      |
| log        | Event logger         | https://github.com/emit-js/log#readme        |
| render     | Server side render   | https://github.com/emit-js/render#readme     |
| store      | Immutable store      | https://github.com/emit-js/store#readme      |
| view       | DOM view             | https://github.com/emit-js/view#readme       |
