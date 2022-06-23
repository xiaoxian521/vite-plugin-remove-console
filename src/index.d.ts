import { Plugin } from "vite";

declare module "vite-plugin-remove-console" {
  interface Options {
    /** Don't remove console.log these modules */
    external?: Array<string>;
  }
  function removeConsole(options?: Partial<Options>): Plugin;
  export { removeConsole as default };
}
