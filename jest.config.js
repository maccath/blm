const { defaults } = require("jest-config")

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, "mdx"],
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.(md|mdx)$": "jest-transformer-mdx/cra",
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [
    `cypress`,
    `node_modules`,
    `\\.cache`,
    `<rootDir>.*/public`,
  ],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
}
