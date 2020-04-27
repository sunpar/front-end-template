module.exports = {
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2|svg)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  // show where to find the testing setup file
  setupFilesAfterEnv: ['./jest.setup.js'],
  // moduleNameMapper: {
  //   '\\.(css|jpg|png|svg)$': '<rootDir>/empty-module.js',
  // },
};
