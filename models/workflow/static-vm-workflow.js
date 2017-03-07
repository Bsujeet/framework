'use strict';

module.exports = {
    name: 'CREATE_VM',
    title: 'Create new VM and Power it On',
    description: 'This process creates new VM. It also power on the newly created VM',
    version: '1',
    start_step: '1',
    end_step: '3',
    kill_step: '4',
    parameters: [
        {
            name: 'vm_name',
            value: 'My First VM',
            type: 'STRING',
            default: '',
            required: true
        },
        {
            name: 'number_of_cores',
            value: '4',
            type: 'NUMBER',
            default: '',
            required: true
        },
        {
            name: 'memory',
            value: '4',
            type: 'NUMBER',
            default: '',
            required: true
        },
        {
            name: 'storage',
            value: '4',
            type: 'NUMBER',
            default: '',
            required: true
        },
        {
            name: 'os',
            value: '',
            type: 'STRING',
            default: '',
            required: true
        }
    ],
    global_paramters: [
        {
            name: 'global_counter',
            value: '0',
            type: 'number',
            default: '',
            required: false
        }
    ],
    parameter_mappings: [
        {
            from: {
                step: 'workflow',
                parameter: 'vm_name'
            },
            to: {
                step: '2',
                parameter: 'vmName'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'number_of_cores'
            },
            to: {
                step: '2',
                parameter: 'vmCore'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'memory'
            },
            to: {
                step: '2',
                parameter: 'vmMemory'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'storage'
            },
            to: {
                step: '2',
                parameter: 'vmStorage'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'os'
            },
            to: {
                step: '2',
                parameter: 'vmOS'
            }
        },
        {
            from: {
                step: '2',
                parameter: 'vmId'
            },
            to: {
                step: '3',
                parameter: 'vmId'
            }
        },
        {
            from: {
                step: '2',
                parameter: 'vmNode'
            },
            to: {
                step: '3',
                parameter: 'vmNode'
            }
        }
    ],

    steps: [
        {
            stepId: '1',
            name: 'START',
            type: 'FLOW',
            module: '',
            icon: '',
            input_params: [],
            output_params: [],
            ok: '2',
            error: '4',
            state: 'PREPARED'
        },
        {
            stepId: '2',
            name: 'CREATE_VM',
            type: 'ACTION',
            module: 'proxmox-vm-creator',
            icon: '',
            input_params: [
                {
                    name: 'vmName',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmCore',
                    value: '',
                    type: 'NUMBER'
                },
                {
                    name: 'vmMemory',
                    value: '',
                    type: 'NUMBER'
                },
                {
                    name: 'vmStorage',
                    value: '',
                    type: 'NUMBER'
                },
                {
                    name: 'vmOS',
                    value: '',
                    type: 'STRING'
                }
            ],
            output_params: [
                {
                    name: 'vmId',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            ok: '3',
            error: '4',
            state: 'PREPARED'
        },
        {
            stepId: '3',
            name: 'POWERON_VM',
            type: 'ACTION',
            module: 'proxmox-vm-poweron',
            icon: '',
            input_params: [
                {
                    name: 'vmId',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            output_params: [],
            ok: '5',
            error: '4',
            state: 'PREPARED'
        },
        {
            stepId: '5',
            name: 'END',
            type: 'FLOW',
            module: '',
            icon: '',
            input_params: [],
            output_params: [],
            ok: '',
            error: '4',
            state: 'PREPARED'
        },
        {
            stepId: '4',
            name: 'KILL',
            type: 'FLOW',
            module: '',
            icon: '',
            input_params: [],
            output_params: [],
            state: 'PREPARED'
        }
    ]
};
