const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
    prefix: "<rootDir>/src",
    "@/(.*)": "<rootDir>/src/$1",
  },
  // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
  //   prefix: "<rootDir>/src",
  // }),
  setupFiles: ["<rootDir>/src/tests/setup-tests.ts"],
};
