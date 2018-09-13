module.exports = {
  transform: {
    ".ts$": "ts-jest"
  },
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|js)$",
  moduleFileExtensions: ["ts", "js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/*.{ts,tsx}"],
  coverageReporters: ["html", "json"],
  testEnvironment: "jest-environment-jsdom-global"
};
