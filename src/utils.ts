import { resolve } from "path";
// @ts-expect-error
import $T from "./transform";

/**
 * @description Find console types from ast syntax tree and remove
 * @param source SourceMap
 * @returns source after remove console types
 */
export function transforms(
  source: string,
  includes: string[] | undefined,
  externalValue: string[] | undefined
) {
  let consoles: string[] = [];
  if (includes) {
    includes.map(type => {
      consoles.push(`console.${type}()`);
    });
  } else {
    consoles = [`console.log()`];
  }

  const findSource = $T(source, {
    parseOptions: { sourceType: "module" }
  }).find(consoles);

  if (externalValue) {
    return findSource
      .each((r: any) => {
        let eValueString = r.value.arguments
          .map((e: { value: string }) => e.value)
          .join();

        const pattern = new RegExp(`(${externalValue.join("|")})`, "g");
        if (!pattern.test(eValueString)) return r.remove();
      })
      .root()
      .generate();
  }
  return findSource.remove().generate();
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
