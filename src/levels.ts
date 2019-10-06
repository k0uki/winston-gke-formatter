import {Logger, LeveledLogMethod} from 'winston'

export interface StackDriverLoggingLevelLogger extends Logger {
    debug: LeveledLogMethod;
    info: LeveledLogMethod;
    notice: LeveledLogMethod;
    warning: LeveledLogMethod;
    error: LeveledLogMethod;
    critical: LeveledLogMethod;
    alert: LeveledLogMethod;
    emergency: LeveledLogMethod;
}

export const StackDriverLoggingLevels = {
levels: {
    default: 8,    
    debug: 7,
    info: 6,
    notice: 5,
    warning: 4,
    error: 3,
    critical: 2,
    alert: 1,
    emergency: 0
},
colors: {
    default: 'blue',
    debug: 'blue',
    info: 'green',
    notice: 'green',
    warning: 'yellow',
    error: 'red',
    critical: 'red',
    alert: 'red',
    emergency: 'red'
}
};