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
      if (/node_modules/.test(id))
        return {
          code: _source,
          map: null
        };
      let reg = /(\.vue|\.svelte|\.[jt]sx?)$/.test(id);
      if (
        external &&
        external.length > 0 &&
        getAbsolutePath(external).includes(id) &&
        reg
      ) {
        return {
          code: _source,
          map: null
        };
      } else {
        return {
          code: transforms(_source),
          map: null
        };
      }
    }
  };
};

module.exports.default = module.exports;
