'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class DSC18103 extends ZwaveDevice {
	
	onMeshInit() {

		// this.enableDebug();
        // this.printNode();
        
        this.registerCapability('onoff', 'BASIC');
        this.registerCapability('measure_power', 'METER');
        this.registerCapability('meter_power', 'METER');
    }

}

module.exports = DSC18103;