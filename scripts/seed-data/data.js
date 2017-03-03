'use strict';

const data = [
    {
        model: 'User',
        documents: [
            {
                userId: 'admin',
                password: '62fb156d45a1d3ee6edc1ef8783d999a9b8603885c0387a859929d067c29bfd4',
                firstName: 'Administrator',
                sessions: []
            }
        ]
    },
    {
        model: 'Request',
        documents: []
    },
    {
        model: 'Job',
        documents: []
    },
    {
        model: 'Inventory',
        documents: [
            {
                name: 'cpu',
                measure: 'CORE',
                type: 'HARDWARE',
                total_qty: 20,
                alloted_qty: 0,
                researved_qty: 0,
                available_qty: 20,
                reservations: []
            },
            {
                name: 'memory',
                measure: 'MB',
                type: 'HARDWARE',
                total_qty: 4096,
                alloted_qty: 0,
                researved_qty: 0,
                available_qty: 4096,
                reservations: []
            },
            {
                name: 'storage',
                measure: 'GB',
                type: 'HARDWARE',
                total_qty: 500,
                alloted_qty: 0,
                researved_qty: 0,
                available_qty: 500,
                reservations: []
            }
        ]
    },
    {
        model: 'Resource',
        documents: []
    }

];

module.exports = data;
