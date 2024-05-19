module.exports = {
  roots: ['<rootDir>/test'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  reporters: [
    "default",
    ["jest-sonar", {
      outputDirectory: 'reports',
      outputName: 'test-reporter.xml',
      reportedFilePath: 'absolute',
    }]
  ],
  collectCoverage: true,
  coverageReporters: ["lcov", "text", "json", "html"],
};