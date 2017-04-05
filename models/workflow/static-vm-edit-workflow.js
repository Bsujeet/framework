'use strict';

module.exports = {
    name: 'EDIT_VM',
    title: 'Edit VM and Power it On',
    description: 'This process edit VM. It also power on the VM',
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
            name: 'resourceId',
            value: '',
            type: 'STRING',
            default: '',
            required: true
        },
        {
            name: 'vm_Id',
            value: '104',
            type: 'NUMBER',
            default: '',
            required: true
        },
        {
            name: 'vm_node',
            value: 'pve',
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
                parameter: 'vmName'
            },
            to: {
                step: '2',
                parameter: 'vmName'
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
                step: 'workflow',
                parameter: 'number_of_cores'
            },
            to: {
                step: '3',
                parameter: 'vmCore'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'memory'
            },
            to: {
                step: '3',
                parameter: 'vmMemory'
            }
        },
        {
            from: {
                step: 'workflow',
                parameter: 'storage'
            },
            to: {
                step: '3',
                parameter: 'vmStorage'
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
        },
        {
            from: {
                step: '3',
                parameter: 'vmID'
            },
            to: {
                step: '4',
                parameter: 'vmID'
            }
        },
        {
            from: {
                step: '3',
                parameter: 'vmNode'
            },
            to: {
                step: '4',
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
            error: '6',
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
                    name: 'resourceId',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmName',
                    value: '',
                    type: 'STRING'
                },
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
            error: '6',
            state: 'PREPARED'
        },
        {
            stepId: '3',
            name: 'EDIT_VM',
            type: 'ACTION',
            module: 'proxmox-vm-edit',
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
                }
            ],
            output_params: [
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
            ok: '4',
            error: '6',
            state: 'PREPARED'
        },
        {
            stepId: '4',
            name: 'POWERON_VM',
            type: 'ACTION',
            module: 'proxmox-vm-poweron',
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
            output_params: [],
            ok: '5',
            error: '6',
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
            error: '6',
            state: 'PREPARED'
        },
        {
            stepId: '6',
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
