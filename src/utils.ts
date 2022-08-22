import { resolve } from "path";
// @ts-expect-error
import $T from "./transform";

const consoleMethodsToRemove = [
  "log",
  "info",
  "debug",
  "time",
  "timeLog",
  "timeStamp",
  "timeEnd",
  "profile",
  "profileEnd",
];

/**
 * @description Find console.log from ast syntax tree and delete it
 * @param source SourceMap
 * @returns source after deleting all the console methods from the array
 */
export function transforms(source: string): string {
  return consoleMethodsToRemove.reduce((output, method) => {
    return $T(output, { parseOptions: { sourceType: "module" } })
      .find(`console.${method}()`)
      .remove()
      .generate()
  }, source);
}

/**
 * @description Get Absolute Path
 * @param list array of relative paths
 * @returns Array
 */
export function getAbsolutePath(list: Array<string>): Array<string> {
  return list.map(str => {
    return pathFormat(resolve(process.cwd(), str));
  });
}

/**
 * @description translation path（for windows）
 * @param path string
 * @returns string
 */
export function pathFormat(path: string) {
  const translate = /^\\\\\?\\/.test(path);
  const hasAscii = /[^\u0000-\u0080]+/.test(path);

  if (translate || hasAscii) {
    return path;
  }

  return path.replace(/\\/g, "/");
}
