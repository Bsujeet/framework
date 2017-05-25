'use strict';

module.exports = {
    name: 'DELETE_VM',
    title: 'Delete VM',
    description: 'This process delete VM.',
    version: '1',
    start_step: '1',
    end_step: '3',
    kill_step: '4',
    parameters: [
        {
            name: 'vmName',
            value: '104',
            type: 'STRING',
            default: '',
            required: true
        },
        {
            name: 'vm_Id',
            value: '',
            type: 'NUMBER',
            default: '',
            required: true
        },
        {
            name: 'resourceId',
            value: '',
            type: 'STRING'
        },
        {
            name: 'vm_node',
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
                parameter: 'resourceId'
            },
            to: {
                step: '2',
                parameter: 'resourceId'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'vm_Id'
            },
            to: {
                step: '2',
                parameter: 'vmID'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'vm_node'
            },
            to: {
                step: '2',
                parameter: 'vmNode'
            }
        },
        {
            from: {
                step: '2',
                parameter: 'vmID'
            },
            to: {
                step: '3',
                parameter: 'vmID'
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
            error: '5',
            state: 'PREPARED'
        },
        {
            stepId: '2',
            name: 'POWEROFF_VM',
            type: 'ACTION',
            module: 'proxmox-vm-poweroff',
            icon: '',
            input_params: [
                {
                    name: 'vmID',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            output_params: [
                {
                    name: 'vmID',
                    value: '',
                    type: 'NUMBER'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            ok: '3',
            error: '5',
            state: 'PREPARED'
        },
        {
            stepId: '3',
            name: 'DELETE_VM',
            type: 'ACTION',
            module: 'proxmox-vm-delete',
            icon: '',
            input_params: [
                {
                    name: 'vmID',
                    value: '',
                    type: 'NUMBER'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            output_params: [],
            ok: '4',
            error: '5',
            state: 'PREPARED'
        },
        {
            stepId: '4',
            name: 'END',
            type: 'FLOW',
            module: '',
            icon: '',
            input_params: [],
            output_params: [],
            ok: '',
            error: '5',
            state: 'PREPARED'
        },
        {
            stepId: '5',
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
