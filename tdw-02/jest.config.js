module.exports = {
  testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  testPathIgnorePatterns: ["\\\\node_modules\\\\"],
  testEnvironment: "jest-environment-jsdom",
  // other configurations..
};