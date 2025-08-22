/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/server.ts',
    '!<rootDir>/src/config/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  testMatch: ['**/*.spec.ts']
}; 