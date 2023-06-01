module.exports = {
  roots: ['<rootDir>/tests', '<rootDir>/src'],
  rootDir: '.',
  transform: {
    '.+\\.(ts|tsx)$': 'ts-jest',
  }
}