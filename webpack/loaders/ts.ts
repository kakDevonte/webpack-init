import { RuleSetRule } from 'webpack';

const tsRegex: RegExp = /\.(ts|tsx)$/;

export const tsLoader: RuleSetRule = {
  test: tsRegex,
  use: 'ts-loader'
};
