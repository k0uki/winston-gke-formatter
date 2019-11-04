# winston-gke-formatter

winston formatter for GKE(Google Kubernetes Engine). 

GKE streams container stdout to stackdriver logging use Logging Agent(google-fluentd). And Logging agent has some special filed. https://cloud.google.com/logging/docs/agent/configuration#special-fields

This formatter easy to support special filed.

# Installation

```
npm install winston-gke-formatter
```

# Usage

Add the formaters you need to winston config.

## Severity Support

Stackdriver Logging uses "serverity" filed instead "level".

```javascript
const gke_formatter = require('winston-gke-formatter')

const logger = winston.createLogger(
    format: winston.format.combine(
            gke_formatter.severity(),
            winston.format.json()
    )
)

logger.info('hi')
> {"message":"hi","severity":"info"}
```

## Stackdriver Logging Level Support

Stackdriver Logging's log severity fields is different winston default.

Stackdriver Logging: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#LogSeverity

Winston: https://github.com/winstonjs/winston#logging-levels

Support Stackdriver Logging filed

```javascript
const gke_formatter = require('winston-gke-formatter')

const logger = winston.createLogger(
    levels: gke_formatter.StackDriverLoggingConfig.levels,
    format: winston.format.combine(
            gke_formatter.severity(),
            winston.format.json()
    )
)

logger.emergency('super fatal error')
> {"message":"super fatal error","severity":"emergency"}
```

if use TypeScript. Have to set interface at generics. see https://github.com/winstonjs/winston/issues/1523

```javascript
import * as gke_formatter from 'winston-gke-formatter'

logger = <gke_formatter.StackDriverLoggingLeveledLogger>winston.createLogger({
    levels: gke_formatter.StackDriverLoggingConfig.levels,
    format: winston.format.combine(
        gke_formatter.severity(),
        winston.format.json()
    ),
    transports: [
         new winston.transports.Console()
    ]
});
```