module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-remix-icon|react-native-iphone-x-helper|react-native-responsive-fontsize|react-native-linear-gradient|react-native-keyboard-aware-scroll-view)/)',
  ],
  modulePathIgnorePatterns: ['lib', '@types'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.spec.{ts,tsx}',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.story.{ts,tsx}',
    '!src/**/*.style.{ts,tsx}',
    '!src/**/export-types.ts',
    '!src/**/index.ts',
    '!src/resources/svg/**',
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    'styled-components':
      '<rootDir>/node_modules/styled-components/native/dist/styled-components.native.cjs.js',
  },
};
