module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: {
          version: 3,
          proposals: true
        }
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/transform-runtime',
    '@babel/proposal-class-properties',
    '@babel/syntax-dynamic-import',
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          '@actions': './src/actions',
          '@components': './src/components',
          '@images': './src/images',
          '@reducers': './src/reducers',
          '@sass': './src/sass'
        }
      }
    ]
  ]
};
