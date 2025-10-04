import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default [
  // CommonJS build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'default'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      })
    ],
    external: [
      '@harispandzic46/wayup-styles-fonts-arial',
      '@campusjob/wayup.styles.colors',
      '@campusjob/wayup.styles.layout',
      '@campusjob/wayup.constants.urls'
    ]
  },
  // ES modules build
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.esm.js',
      format: 'esm'
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json'
      })
    ],
    external: [
      '@harispandzic46/wayup-styles-fonts-arial',
      '@campusjob/wayup.styles.colors',
      '@campusjob/wayup.styles.layout',
      '@campusjob/wayup.constants.urls'
    ]
  }
];
