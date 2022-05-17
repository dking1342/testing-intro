/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = async () => {
  return {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    globals: {
      "ts-jest": {
        tsconfig: "./tsconfig.jest.json",
      },
    },
    setupFilesAfterEnv: ["./src/jest.setup.ts"],
  };
};
