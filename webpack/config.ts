import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { Configuration, WebpackPluginInstance } from 'webpack';
import 'webpack-dev-server';

import { DEV_SERVER_PORT, DIST_DIR, IS_DEV, SRC_DIR } from './constants';
import { tsLoader, cssLoader } from './loaders';

const filename = (ext: string): string => (IS_DEV ? `[name].${ext}` : `[name].[chunkhash].${ext}`);

const plugins: WebpackPluginInstance[] = [
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, '../public/index.html')
  })
];

const config: Configuration = {
  name: 'client',
  target: 'web',
  plugins,
  entry: path.resolve(SRC_DIR, 'app/index.tsx'),
  output: {
    path: DIST_DIR,
    filename: filename('js'),
    publicPath: '/'
  },
  devtool: IS_DEV ? 'source-map' : false,
  resolve: {
    alias: {
      '@': SRC_DIR
    },
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [tsLoader, cssLoader]
  },
  ...(IS_DEV && {
    devServer: {
      historyApiFallback: true,
      port: DEV_SERVER_PORT,
      open: true,
      hot: true
    }
  }),
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all'
        }
      }
    }
  }
};

export default config;
