module.exports = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$":
      "<rootDir>/__mocks__/styleMock.js",
    "\\.(png|jpg|gif|ttf|eot|svg)$":
       "<rootDir>/__mocks__/fileMock.js"
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.js'
  ]
}
