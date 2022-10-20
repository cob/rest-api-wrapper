import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  globals: {
    cob: null,
    'ts-jest': {
      tsconfig: 'tsconfig.test.json'
    }
  },
  moduleNameMapper: {
    '^@cob/cobjs-(.*)$': '<rootDir>/packages/$1/src'
  }
};

export default config;
