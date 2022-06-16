import type { Plugin } from "vite";
import type { Options } from "./types";
import { transforms, getAbsolutePath } from "./utils";

module.exports = (options?: Partial<Options>): Plugin => {
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
