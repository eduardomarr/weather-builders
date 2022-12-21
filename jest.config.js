module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!(@react-native|react-native|react-native-vector-icons|react-native-remix-icon|react-native-iphone-x-helper|react-native-responsive-fontsize|react-native-linear-gradient|react-native-keyboard-aware-scroll-view)/)',
  ],
};
