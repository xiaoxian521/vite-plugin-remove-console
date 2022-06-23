import type { Plugin } from "vite";
import { transforms, getAbsolutePath } from "./utils";

interface Options {
  /** Don't remove console.log these modules */
  external?: Array<string>;
}

module.exports = function removeConsole(options?: Partial<Options>): Plugin {
  const { external } = options || {};
  return {
    name: "vite:remove-console",
    apply: "build",
    enforce: "post",
    transform(_source: string, id: string) {
      if (/node_modules/.test(id)) return _source;
      let reg = /(\.vue|\.svelte|\.[jt]sx?)$/.test(id);
      if (
        external &&
        external.length > 0 &&
        getAbsolutePath(external).includes(id) &&
        reg
      ) {
        return _source;
      } else {
        return transforms(_source);
      }
    }
  };
};

module.exports.default = module.exports;
