// jest.config.js
module.exports = {
  collectCoverageFrom: [
    '**/*.tsx',
    //'!**/*.d.ts',
    //'!**/node_modules/**',
  ],
  coveragePathIgnorePatterns: [
    "<rootDir>/pages/_app.tsx",
    "<rootDir>/.next",
    "<rootDir>/coverage",
  ],  
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules) - See README file for more information.
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle image imports - See README file for more information.
    '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^@/components/(.*)$': '<rootDir>/components/$1',
  },
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    // Use babel-jest to transpile tests with the next/babel preset - See README file for more information.
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
}
