import * as assert from 'assert';
import * as sinon from 'sinon';

import * as gke from '../src/index'

import * as winston from 'winston'

describe('Winston', ()=> {
    const console_transport = new winston.transports.Console();
    let spy: sinon.SinonSpy;
    let logger: gke.StackDriverLoggingLeveledLogger;

    beforeEach((done) => {
        spy = sinon.spy(console_transport, 'log')
        logger = <gke.StackDriverLoggingLeveledLogger>winston.createLogger({
            levels: gke.StackDriverLoggingConfig.levels,
            format: winston.format.combine(
                gke.severity(),
                winston.format.json()
            ),
            transports: [
                console_transport
            ]
        });
        winston.addColors(gke.StackDriverLoggingConfig.colors)
        done();
    });

    afterEach((done) => {
        spy.restore();
        done();
    });

    it('set serverity', ()=> {
        logger.info('hi')

        const loggedObject =spy.args[0][0]
        assert(loggedObject.severity, 'info')
        assert(loggedObject.message, 'hi')
    });

    it('can call stackdriver level', ()=> {
        logger.emergency('super big error')

        const loggedObject =spy.args[0][0]
        assert(loggedObject.severity, 'emergency')
        assert(loggedObject.message, 'super big error')   
    });

    it('can use level too', () => {
        logger = <gke.StackDriverLoggingLeveledLogger>winston.createLogger({
            levels: gke.StackDriverLoggingConfig.levels,
            format: winston.format.combine(
                gke.severity({use_level:true}),
                winston.format.json()
            ),
            transports: [
                console_transport
            ]
        });

        logger.info('hi')

        const loggedObject =spy.args[0][0]
        assert(loggedObject.severity, 'info')
        assert(loggedObject.level, 'info')
        assert(loggedObject.message, 'hi')
    });
});