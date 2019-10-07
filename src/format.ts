import {format} from 'winston'

export const severity = format((info, opt) => {
    info.severity = info.level
    if(opt.delete_level) delete info.level;
    return info;
})
