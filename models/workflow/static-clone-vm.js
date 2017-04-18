'use strict';

module.exports = {
    name: 'CLONE_VM',
    title: 'Clone VM and Power it On',
    description: 'This process clone VM. It also power on the VM',
    version: '1',
    start_step: '1',
    end_step: '3',
    kill_step: '4',
    parameters: [
        {
            name: 'vm_name',
            value: 'TestClone',
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
                parameter: 'os'
            },
            to: {
                step: '2',
                parameter: 'vmOS'
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
        },
        {
            from: {
                step: '3',
                parameter: 'vmID'
            },
            to: {
                step: '5',
                parameter: 'vmID'
            }
        },
        {
            from: {
                step: '3',
                parameter: 'vmNode'
            },
            to: {
                step: '5',
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
            error: '7',
            state: 'PREPARED'
        },
        {
            stepId: '2',
            name: 'CLONE_VM',
            type: 'ACTION',
            module: 'proxmox-vm-clone',
            icon: '',
            input_params: [
                {
                    name: 'vmName',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmOS',
                    value: '',
                    type: 'STRING'
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
                    type: 'NUMBER'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                }
            ],
            ok: '3',
            error: '7',
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
            error: '7',
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
            error: '7',
            state: 'PREPARED'
        },
        {
            stepId: '5',
            name: 'GET_VM_IP',
            type: 'ACTION',
            module: 'proxmox-vm-ip',
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
                    type: 'STRING'
                },
                {
                    name: 'vmNode',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'vmIP',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'loginUserName',
                    value: '',
                    type: 'STRING'
                },
                {
                    name: 'loginPassword',
                    value: '',
                    type: 'STRING'
                }
            ],
            ok: '6',
            error: '7',
            state: 'PREPARED'
        },
        {
            stepId: '6',
            name: 'END',
            type: 'FLOW',
            module: '',
            icon: '',
            input_params: [],
            output_params: [],
            ok: '',
            error: '7',
            state: 'PREPARED'
        },
        {
            stepId: '7',
            name: 'KILL',
            type: 'FLOW',
            module: 'proxmox-vm-delete',
            icon: '',
            input_params: [],
            output_params: [],
            state: 'PREPARED'
        }
    ]
};
