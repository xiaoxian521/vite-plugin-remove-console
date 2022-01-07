const { transformSync } = require("@babel/core")
const myBabelPlugin = require("babel-remove-console")

module.exports = (name: string) => {
  const babelConfig = {
    plugins: [myBabelPlugin(name)],
  }
  return (code: any) => {
    const output = transformSync(code, babelConfig)
    return output.code
  }
}