/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/tests/setupTests.ts"],
  testPathIgnorePatterns: ["/node_modules", "/dist"],
  // transform: { "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest" },
  moduleNameMapper: {
    "\\.(scss|css|sass)$": "identity-obj-proxy",
  },
};
