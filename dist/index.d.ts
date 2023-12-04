import { PluginOption } from 'vite';
export { PluginOption } from 'vite';

interface Options {
    /** The types of console that needs to be removed, such as `log`、`warn`、`error`、`info`, default `log` */
    includes?: string[] | undefined;
    /** Don't remove the types of console these modules */
    external?: string[] | undefined;
    /** Don't remove the log that contains this value */
    externalValue?: string[] | undefined;
    /** Completely customize the statements that need to be removed, which will overwrite `includes` */
    custom?: string[] | undefined;
}

/** https://github.com/xiaoxian521/vite-plugin-remove-console#-configurable */
declare function removeConsole(options?: Partial<Options>): PluginOption;

export { removeConsole as default };
