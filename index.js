'use strict';

require('./web');  // Require Web by default.

// We may use this environment variable to identify what type of process to launch.
// Currently single process runs all the logic hence not using this logic
/* const type = process.env.PROCESS_TYPE

logger.info(`Starting '${type}' process`, { pid: process.pid })

if (type === 'web') {
  require('./web')
} else if (type === 'workflow-manager') {
  require('./worker/workflow-manager')
} else if (type === 'workitem-executer') {
  require('./worker/workitem-executer')
} else {
  throw new Error(`
    ${type} is an unsupported process type.
    Use one of: 'web', 'workflow-manager', 'workitem-executer'!
  `)
} */
