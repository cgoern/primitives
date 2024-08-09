import * as esbuild from 'esbuild'
import { minifyTemplates, writeFiles } from 'esbuild-minify-templates'

await esbuild.build({
  entryPoints: ['src/text.js', 'src/rich-text.js'],
  outdir: 'dist',
  plugins: [minifyTemplates(), writeFiles()],
  bundle: true,
  sourcemap: false,
  minify: true,
  write: false,
})
