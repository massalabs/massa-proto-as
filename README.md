# MASSA PROTO AS

Generated AssemblyScrict source code from protobuf files for Massa blockchain.

# Development
## Node version
A recent version of `node` is required to use `as-proto-gen`.
Using [fnm](https://github.com/Schniz/fnm) allow to easily install `node` in the projet directory.

After having installed and configured `fnm` simply run:
```bash
fnm install v20.2.0
```
then (at the root of the project):
```bash
node --version > .node-version
```
After this `npm install` and `npm run asbuild:proto` should run smoothly.

## Compilation on different OSes

One can specify the the plugin to use to `protoc` for code generation, or it can guess it based on other arguments.
For a full command line, on Linux we would need to add
`--plugin=protoc-gen-as=./node_modules/.bin/as-proto-gen` to `protoc` invocation.
But it does not work on Windows.

So we chose to let `protoc` guesse and helped it a bit.
If `protoc` has to guess its plugin it must be named `protoc-gen-as` and be available in the `PATH` or in `node` search directory.

Hence we added some links in `node_modules/.bin`.

Windows users *must* had to their `PATH` for the build to work.
