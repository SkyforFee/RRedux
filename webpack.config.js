const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


const env = process.env.NODE_ENV || 'development'
module.exports = {
  mode: env,
  entry: {
    main: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/i,
      //   use: ['html-loader']
      // },
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            // babel 转义的配置选项
            babelrc: false,
            presets: [
              // 添加 preset-react
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env'), { modules: false }]
            ],
            plugins: [
              "@babel/plugin-proposal-class-properties",
            ],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '新手学堂',
      template: './index.html'
    }),
  ],

}