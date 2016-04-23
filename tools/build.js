/*eslint-disable no-console */
import webpack from 'webpack';
import colors from 'colors';

import config from '../webpack.production.config';

process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack...'.blue);

webpack(config).run((err, stats) => {
  if (err) {
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log('Compiled in production mode and written to /dist.'.green, '\'MERICA'.america);

  return 0;
});
