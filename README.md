# Simple [NodeJS](https://nodejs.org) server for redirecting requests

## Configuration:
1. **Server port** *(required)* - environment variable `PORT` or Cloud Foundry [port](https://www.npmjs.com/package/cfenv#return-value) value
2. **Redirect URL** *(required)* - environment variable `REDIRECT_URL`
3. **Preserve URL path after redirect** *(optional, `false` by default)* - environment variable `REDIRECT_WITH_SAME_PATH`, options: `true`, `false`
