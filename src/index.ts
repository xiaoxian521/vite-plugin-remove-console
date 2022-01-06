const baseBabel = require('./babel')

module.exports = (name: string) => {
  let config: { command: string }
  const babelConsoleName = baseBabel(name)
  return {
    name: 'remove-console',
    configResolved(resolvedConfig: { command: string }) {
      config = resolvedConfig
    },
    transform(_source: string, id: string) {
      if (config.command === 'build') {
        if (/\.(vue|js|jsx|ts|tsx)$/.test(id)) {
          return babelConsoleName(_source)
        }
      }
    }
  }
}
