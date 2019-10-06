import * as assert from 'assert';

import * as levels from '../src/levels';

import * as winston from 'winston'

describe('Winston', ()=> {
    it('is here', ()=> {
        const logger: levels.StackDriverLoggingLevelLogger = <levels.StackDriverLoggingLevelLogger>winston.createLogger({
            levels: levels.StackDriverLoggingLevels.levels,
            format: winston.format.json(),
            defaultMeta: { service: 'user-service' },
            transports: [
              new winston.transports.Console()
            ]
        });
        winston.addColors(levels.StackDriverLoggingLevels.colors)
        logger.info('hi')
        logger.debug('debug!!')
        logger.critical('critical!!!')
    })
});