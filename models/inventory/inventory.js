'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Helper functions

function required (val) {
    return val && val.length;
}
// Inventory Schema definition
const InventorySchema = new Schema({
    name: {
        type: String,
        validate: [required, 'Name of the inventory item is required'],
        index: { unique: true }
    },
    type: {
        type: String,
        enum: ['HARDWARE', 'SOFTWARE', 'FIRMWARE']
    },
    measure: {
        type: String,
        enum: ['CORE', 'UNIT', 'GB', 'MB']
    },
    total_qty: {
        type: Number,
        default: 0
    },
    used_qty: {
        type: Number,
        default: 0
    },
    available_qty: {
        type: Number,
        default: 0
    },
    researved_qty: {
        type: Number,
        default: 0
    },
    reservations: [
        {
            token: Schema.Types.ObjectId,
            qty: Number,
            createdAt: {
                type: Date,
                default: Date.now
            }
        }
    ],
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: {
        type: Date
    }
});

// Define Additional Methods for Inventory Schema Object

function reserveResource (model, name, qty, measure, callback) {
    const _name = name;
    const _qty = qty;
    const _measure = measure;
    const _token = mongoose.Types.ObjectId();
    model.findOne({ name: _name, measure: _measure }, (err, inventory) => {
        if (err) {
            return callback(err);
        }
        if (inventory.available_qty >= qty) {
            inventory.available_qty -= qty;
            inventory.researved_qty += qty;
            inventory.reservations.push({ token: _token, name: _name, qty: _qty });
            inventory.save((err) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, { name: _name, token: _token });
            });
        } else {
            return callback(new Error('Insufficient resource'));
        }
    });
}

function unReserveResource (model, name, token, callback) {
    const _token = token;
    const _name = name;
    model.findOne({ name: _name }, (err, inventory) => {
        if (err) {
            return callback(err);
        }
        let tokenIndex = -1;
        let itemQty = 0;
        for (let idx = 0; idx < inventory.reservations.length; idx++) {
            if (inventory.reservations[idx].token.equals(_token)) {
                tokenIndex = idx;
                itemQty = inventory.reservations[idx].qty;
                break;
            }
        }
        if (tokenIndex >= 0) {
            inventory.available_qty += itemQty;
            inventory.researved_qty -= itemQty;
            inventory.reservations.splice(tokenIndex, 1);
            inventory.save((err, inventory) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, inventory);
            });
        } else {
            return callback(new Error('No reservation found for given token'));
        }
    });
}

function useResource (model, name, token, callback) {
    const _token = token;
    const _name = name;
    model.findOne({ name: _name }, (err, inventory) => {
        if (err) {
            return callback(err);
        }
        let tokenIndex = -1;
        let itemQty = 0;
        for (let idx = 0; idx < inventory.reservations.length; idx++) {
            if (inventory.reservations[idx].token.equals(_token)) {
                tokenIndex = idx;
                itemQty = inventory.reservations[idx].qty;
                break;
            }
        }
        if (tokenIndex >= 0) {
            inventory.used_qty += itemQty;
            inventory.researved_qty -= itemQty;
            inventory.reservations.splice(tokenIndex, 1);
            inventory.save((err, inventory) => {
                if (err) {
                    return callback(err);
                }
                return callback(null, inventory);
            });
        } else {
            return callback(new Error('No reservation found for given token'));
        }
    });
}

InventorySchema.statics.makeResearvation = function (name, qty, measure, callback) {
    const _name = name;
    const _qty = qty;
    const _measure = measure;
    const _self = this;
    reserveResource(_self, _name, _qty, _measure, (err, reservation) => {
        if (err) {
            if (err.name && err.name === 'VersionError') {
                // In case of version mismatch retry once again.
                reserveResource(_self, _name, _qty, _measure, (err, reservation) => {
                    return callback(err, reservation);
                });
            } else {
                return callback(err);
            }
        } else {
            return callback(null, reservation);
        }
    });
};

InventorySchema.statics.rollBackResearvation = function (name, token, callback) {
    const _token = token;
    const _name = name;
    const _self = this;
    unReserveResource(_self, _name, _token, (err, inventory) => {
        if (err) {
            if (err.name && err.name === 'VersionError') {
                // In case of version mismatch retry once again.
                unReserveResource(_self, _name, _token, (err, inventory) => {
                    return callback(err, inventory);
                });
            } else {
                return callback(err);
            }
        } else {
            return callback(null, inventory);
        }
    });
};

InventorySchema.statics.useItem = function (name, token, callback) {
    const _token = token;
    const _name = name;
    const _self = this;
    useResource(_self, _name, _token, (err, inventory) => {
        if (err) {
            if (err.name && err.name === 'VersionError') {
                // In case of version mismatch retry once again.
                useResource(_self, _name, _token, (err, inventory) => {
                    return callback(err, inventory);
                });
            } else {
                return callback(err);
            }
        } else {
            return callback(null, inventory);
        }
    });
};


InventorySchema.pre('save', function (next) {
    this.increment();
    return next();
});

const Inventory = mongoose.model('Inventory', InventorySchema);
// Expose Inventory Model
module.exports = Inventory;
