module.exports = {
    roots: ['<rootDir>/test'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    reporters: [
      "default",
      ["jest-sonar-reporter", {
        outputDirectory: 'reports',
        outputName: 'test-reporter.xml',
      }]
    ],
    collectCoverage: true,
    coverageReporters: ["lcov", "text", "json", "html"],
};