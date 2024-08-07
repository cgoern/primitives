import * as esbuild from 'esbuild'

let context = await esbuild.context({
	entryPoints: ['src/text.js', 'src/rich-text.js'],
	outdir: 'www/dist',
	bundle: true,
	sourcemap: false,
	minify: true,
})

await context.watch()

let { host, port } = await context.serve({
	servedir: 'www',
	host: '127.0.0.1',
})

console.log(`Start server on: http://${host}:${port}`)
