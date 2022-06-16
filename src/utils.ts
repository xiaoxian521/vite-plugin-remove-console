import { join } from "path";
// @ts-expect-error
import $T from "./transform";

/**
 * @description Find console.log from ast syntax tree and delete it
 * @param source SourceMap
 * @returns source after deleting console.log
 */
export function transforms(source: string): string {
  return $T(source, { parseOptions: { sourceType: "module" } })
    .find(`console.log()`)
    .remove()
    .generate();
}

/**
 * @description Get Absolute Path
 * @param list array of relative paths
 * @returns Array
 */
export function getAbsolutePath(list: Array<string>): Array<string> {
  return list.map(str => {
    return join(process.cwd(), str);
  });
}
