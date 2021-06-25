module.exports = {
  testTimeout: 30000,
  //preset: '@shelf/jest-dynamodb',
  moduleFileExtensions: ['js', 'html'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.html$': '<rootDir>/test/rawLoader.js',
  }
  
};
