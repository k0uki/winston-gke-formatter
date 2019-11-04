import { Logger, LeveledLogMethod } from 'winston';
export interface StackDriverLoggingLeveledLogger extends Logger {
    debug: LeveledLogMethod;
    info: LeveledLogMethod;
    notice: LeveledLogMethod;
    warning: LeveledLogMethod;
    error: LeveledLogMethod;
    critical: LeveledLogMethod;
    alert: LeveledLogMethod;
    emergency: LeveledLogMethod;
}
export declare const StackDriverLoggingConfig: {
    levels: {
        default: number;
        debug: number;
        info: number;
        notice: number;
        warning: number;
        error: number;
        critical: number;
        alert: number;
        emergency: number;
    };
    colors: {
        default: string;
        debug: string;
        info: string;
        notice: string;
        warning: string;
        error: string;
        critical: string;
        alert: string;
        emergency: string;
    };
};
