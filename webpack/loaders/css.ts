import { RuleSetRule } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const cssRegex: RegExp = /\.css$/i;

export const cssLoader: RuleSetRule = {
  test: cssRegex,
  use: [MiniCssExtractPlugin.loader, 'css-loader']
};
