# 6 Caching

[Caching](https://webpack.js.org/guides/caching/)

## Dependencies

- webpack
- loadash
- html-webpack-plugin

## Note

I used `webpack 5.39.1` when I tried this demo. The `main.<hash>.js` is cached by webpack in the first step.

```bash
assets by status 69.6 KiB [cached] 1 asset
asset index.html 231 bytes [compared for emit]
runtime modules 1010 bytes 5 modules
cacheable modules 532 KiB
  ./src/index.js 281 bytes [built] [code generated]
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
```

And in the last step, the `vendor` hash remained unchanged even if I did not explicitly use `moduleIds: "deterministic"`.
