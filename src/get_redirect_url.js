const { redirectUrl, redirectWithSamePath } = require('./config');
const { trimTrailingSlash } = require('./utils');

let getRedirectUrl = () => redirectUrl;

if (redirectWithSamePath) {
  const redirectBaseUrl = trimTrailingSlash(redirectUrl);
  getRedirectUrl = urlPath => redirectBaseUrl + urlPath;
}

module.exports = getRedirectUrl;
