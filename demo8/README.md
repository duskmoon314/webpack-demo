# demo8: Environment Variables

[Environment Variables](https://webpack.js.org/guides/environment-variables/)

## Dependencies

- webpack
- loadash
- dotenv
- html-webpack-plugin

## Note

I don't think using env in cli is a good choice. So I use dotenv as an alternative choice.

In this way, we can organize all the envs in a `.env`-like file, and then use `dotenv` to parse and use.
