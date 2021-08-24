import { build, BuildOptions } from 'esbuild'
import svgrPlugin from 'esbuild-plugin-svgr'
import path from 'path'

const buildOptions: BuildOptions = {
  bundle: true,
  entryPoints: [path.resolve(__dirname, '..', 'src/index.tsx')],
  outdir: path.resolve(__dirname, '..', 'dist'),
  plugins: [svgrPlugin()],
  sourcemap: true,
}

const buildApp = async () => {
  try {
    await build(buildOptions)
  } catch (e) {
    process.exit(1)
  }
}

buildApp()
