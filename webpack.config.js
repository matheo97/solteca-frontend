import path from 'path';
import InterpolateHtmlPlugin from 'interpolate-html-plugin';
import CspHtmlWebpackPlugin from 'csp-html-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let cspPolicy ={
  'base-uri': "'self'",
  'script-src': ["'self'", "'unsafe-eval'", "'strict-dynamic'", "https://*.google.com"], //  Safari needs https://*.google.com explicit
  'style-src': ["'self'", "'unsafe-inline'", "https://*.googleapis.com"],
  'default-src': "'none'",
  'img-src': ["'self'", "https:"],
  'frame-src' : [
    "'self'", 
    "https://*.typeform.com", 
    "https://*.stripe.com", 
    "https://*.googleapis.com",
    "https://*.google.com"
  ],
  'connect-src': ["'self'", "http:", "wss:"],
  'media-src': ["'self'", "http:"],
  'form-action': "'self'",
  'font-src': 'http:',
  "upgrade-insecure-requests" : ""
};

module.exports = {
  mode: 'development',
  entry: {
    main: [
      'core-js/stable',
      '@babel/polyfill',
      path.join(__dirname, 'src', 'index.tsx')
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.bundle.js',
    publicPath: '/',
  },
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', 'json', '.tsx', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    historyApiFallback: true,
    port: 3010,
    headers: {
      'X-Frame-Options': 'deny'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      favicon: 'src/images/favicon.ico',
      cspPlugin: {
        enabled: true,
        policy: cspPolicy,
        hashingMethod: 'sha256',
        hashEnabled: {
          'script-src': true,
          'style-src': false,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': false,
        },
      },
    }),
    new CspHtmlWebpackPlugin(
      cspPolicy,
      {
        enabled: true,
        hashingMethod: 'sha256',
        hashEnabled: {
          'script-src': true,
          'style-src': false,
        },
        nonceEnabled: {
          'script-src': true,
          'style-src': false,
        },
      })
  ],
  module: {
    rules: [
      {
        test: /\.(tsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['babel-loader'],
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        include: path.resolve(__dirname, 'src/images'),
        loader: "file-loader?name=assets/[name].[ext]"
      },
    ],
  },
};