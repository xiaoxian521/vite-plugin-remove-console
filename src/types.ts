export interface Options {
  /** The types of console that needs to be removed, such as `log`、`warn`、`error`、`info`, default `log` */
  includes?: string[] | undefined;
  /** Don't remove the types of console these modules */
  external?: string[] | undefined;
  /** Do not remove the log that contains this value */
  externalValue?: string[] | undefined;
}
