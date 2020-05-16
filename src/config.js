const cfenv = require('cfenv');

const port = process.env.PORT || cfenv.getAppEnv().port;
const redirectUrl = process.env.REDIRECT_URL;
const redirectWithSamePath = process.env.REDIRECT_WITH_SAME_PATH === 'true';

if (!port) {
  throw new Error("Application port isn't set");
}

if (!redirectUrl) {
  throw new Error("Redirect URL isn't set");
}

module.exports = {
  port,
  redirectUrl,
  redirectWithSamePath
};
