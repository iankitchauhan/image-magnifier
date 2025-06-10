import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/image-magnifier.js', // your main source file
  output: [
    {
      file: 'dist/image-magnifier.js', // output file
      format: 'iife', // good for browser usage directly
      name: 'ImageMagnifier',
      sourcemap: false,
    }
  ],
  plugins: [
    resolve(), // Resolves node_modules imports
    commonjs(), // Converts CommonJS to ES modules
    babel({ 
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env']
    }),
    terser() // Minifies the code
  ]
};
