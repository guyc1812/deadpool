'use strict';

import path from 'path';
import _ from 'lodash';

let all = {
  env: process.env.NODE_ENV,

  // Root path of server
  root: path.normalize(`${__dirname}/../../..`),

  // Browser-sync port
  browserSyncPort: process.env.BROWSER_SYNC_PORT || 3000,

  // Server port
  port: process.env.PORT || 9000,

  // Server IP
  ip: process.env.IP || '0.0.0.0'

};

// Export the config object based on the NODE_ENV
module.exports = _.merge(
  all,
  require(`./${process.env.NODE_ENV}.js`) || {});
