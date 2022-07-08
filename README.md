## esbuild-loader legalComments

[esbuild-loader](https://github.com/privatenumber/esbuild-loader) doesn't support `legalComments: "linked"`.

See below:

```console
$ git clone https://github.com/ybiquitous/esbuild-loader-legal-comments.git

$ cd esbuild-loader-legal-comments

$ npm i

$ npm run build
```

The build command raises the following error:

```
> build
> webpack build --mode=production

[webpack-cli] HookWebpackError: Transform failed with 1 error:
error: Cannot transform with linked or external legal comments
...
```

So, when disabling the `"linked"` option,

```diff
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -39,7 +39,7 @@ module.exports = [
       minimize: true,
       minimizer: [
         new ESBuildMinifyPlugin({
-          legalComments: "linked",
+          // legalComments: "linked",
         }),
       ],
     },
```

The build should work successfully:

```console
$ npm run build
...
webpack 5.73.0 compiled successfully in 86 ms

$ ls dist/
default.js             eof.js
default.js.LICENSE.txt linked.js
```
