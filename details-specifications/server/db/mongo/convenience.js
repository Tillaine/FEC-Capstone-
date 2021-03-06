var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Vehicle = require('./vehicle');

var ConvenienceFeatSchema = new Schema ({
    one_tocuh_down_wnds: String,
    tilt_steering_wheel: String,
    telescoping_steering_wheel: String,
    ac: String,
    garage_dr_transmiter: String,
    front_beverage_holder: String,
    spd_control: String,
    illuminated_entry: String,
    rear_bev_holder: String,
    pwr_wnds: String,
    trunk_auto_latch: String,
    emergency_comm_sys: String,
    remote_keyless_entry: String,
    vehicle: {
        type: Schema.Types.ObjectId,
        ref: 'Vehicle'
    }
});

module.exports = mongoose.model('ConvenienceFeature', ConvenienceFeatSchema);