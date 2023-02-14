import { Options } from "./types";
import type { PluginOption } from "vite";
import { transforms, getAbsolutePath } from "./utils";

export default function removeConsole(
  options: Partial<Options> = {}
): PluginOption {
  const { external, includes } = options || {};
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
          code: transforms(_source, includes),
          map: null
        };
      }
    }
  };
}

export type { PluginOption };
