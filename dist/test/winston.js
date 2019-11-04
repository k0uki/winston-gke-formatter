"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const sinon = require("sinon");
const gke = require("../src/index");
const winston = require("winston");
describe('Winston', () => {
    const console_transport = new winston.transports.Console();
    let spy;
    let logger;
    beforeEach((done) => {
        spy = sinon.spy(console_transport, 'log');
        logger = winston.createLogger({
            levels: gke.StackDriverLoggingConfig.levels,
            format: winston.format.combine(gke.severity(), winston.format.json()),
            transports: [
                console_transport
            ]
        });
        winston.addColors(gke.StackDriverLoggingConfig.colors);
        done();
    });
    afterEach((done) => {
        spy.restore();
        done();
    });
    it('set serverity', () => {
        logger.info('hi');
        const loggedObject = spy.args[0][0];
        assert(loggedObject.severity, 'info');
        assert(loggedObject.message, 'hi');
    });
    it('can call stackdriver level', () => {
        logger.emergency('super big error');
        const loggedObject = spy.args[0][0];
        assert(loggedObject.severity, 'emergency');
        assert(loggedObject.message, 'super big error');
    });
    it('can use level too', () => {
        logger = winston.createLogger({
            levels: gke.StackDriverLoggingConfig.levels,
            format: winston.format.combine(gke.severity({ use_level: true }), winston.format.json()),
            transports: [
                console_transport
            ]
        });
        logger.info('hi');
        const loggedObject = spy.args[0][0];
        assert(loggedObject.severity, 'info');
        assert(loggedObject.level, 'info');
        assert(loggedObject.message, 'hi');
    });
});
