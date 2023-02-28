## 2.1.0 (2023-02-28)

- feat: support retaining the specified console by configuring `externalValue` without remove it, for example like this: `removeConsole({ externalValue: ["这个不删", "noRemove", ...] })`

## 2.0.0 (2023-02-14)

- feat: supports passing `includes` to specify the type of `console` that needs to be removed, for example like this: `removeConsole({ includes: ["log", "warn", "error", "info", ...] })`, If `includes` is not passed, `console.log` will be removed by default

## 1.3.0 (2022-11-10)

- compatible with `esm` and `cjs`

## 1.2.0 (2022-11-08)

- fix: build error `export { removeConsole as default }`

## 1.1.0 (2022-07-18)

- feat: support `sourcemap`

## 1.0.4 (2022-07-05)

- fix: path translation problem of `external` parameter value in windows platform

## 1.0.0 (2022-06-16)

- release(1.0.0)
