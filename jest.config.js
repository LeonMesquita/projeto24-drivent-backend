// /** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// module.exports = {
//     preset: "ts-jest",
//     testEnvironment: "node",
//     collectCoverage: true,
//     coveragePathIgnorePatterns: [
//       'node_modules',
//       'test-config',
//       'interfaces',
//       'repositories',
//       'jestGlobalMocks.ts',
//       '<rootDir>/src/server.ts',
//       '<rootDir>/src/utils',
//       '<rootDir>/src/config',
//       '<rootDir>/src/database.ts',
//       '<rootDir>/tests/factories',
//       '<rootDir>/src/controllers',
//       '<rootDir>/src/middlewares',
  
//     ],
//     extensionsToTreatAsEsm: [".ts"],
//     globals: {
//       "ts-jest": {
//         useESM: true,
//       },
//     },
//     moduleNameMapper: {
//       "^(\\.{1,2}/.*)\\.js$": "$1",
//     },
//   };
  
//   module.exports = {
//     roots: ['<rootDir>/src'],
//     collectCoverageFrom: ['<rootDir/src/**/*.ts>'],
//     coverageDirectory: 'coverage',
//     testEnvironment: 'node',
//     transform: {
//       '.+\\.ts$': 'ts-jest'
//     }
//   }

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".ts"],
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testRegex: "tests/.*\\.ts$"
};