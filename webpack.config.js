const webpack = require('webpack');

module.exports = (env) => {
  // In production, the server serves the react app and CORS is not an issue.
  // In development, webpack-dev-server serves the react app, thus CORS prevents requests to server.
  // As a workaround in dev, the react app makes requests to a proxy. See proxy.js
  const apiHost = env && env.production
    ? ''
    : 'http://localhost:8080/http://localhost:8000';

  return {
    entry: './app/App.jsx',
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    output: {
      path: `${__dirname}/static`,
      filename: 'bundle.js',
    },
    devServer: {
      inline: true,
      contentBase: `${__dirname}/static`,
      port: 3333,
      host: '0.0.0.0',
    },
    plugins: [
      new webpack.DefinePlugin({
        AD_HOST: JSON.stringify(''),
        API_HOST: JSON.stringify(apiHost),
        API_PER_PAGE: JSON.stringify(20),
      }),
    ],
    module: {
      rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
          },
        },
      }, {
        test: /\.sass$/,
        exclude: /node_modules/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
        }, {
          loader: 'css-loader', // translates CSS into CommonJS
        }, {
          loader: 'sass-loader', // compiles Sass to CSS
        }],
      }],
    },
  };
};
