import {format} from 'winston'

interface SeverityOptions {
    use_level?: boolean
}

export const severity = format((info, opt: SeverityOptions) => {
    info.severity = info.level
    if(!opt.use_level) delete info.level;
    return info;
})
