import $T from "./transform";

const transforms = (code: string) => {
  return $T(code, { parseOptions: { sourceType: "module" } })
    .find(`console.log()`)
    .remove()
    .generate();
};

module.exports = () => {
  let config: { command: string };
  return {
    name: "remove-console",
    configResolved(resolvedConfig: { command: string }) {
      config = resolvedConfig;
    },
    transform(_source: string, id: string) {
      if (config.command === "build") {
        if (/(\.vue|\.[jt]sx?)$/.test(id) && !/node_modules/.test(id)) {
          return transforms(_source);
        }
      }
    },
  };
};
