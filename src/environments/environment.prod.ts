const packageVersion = require('../../package.json');

export const environment = {
  production: true,
  version: packageVersion.version,
};
