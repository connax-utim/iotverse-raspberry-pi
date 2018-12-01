const core = require('biot-core');
const net = require('./core');
const connect = require('connect');
const cors = require('cors');
const jsonParser = require('body-parser').json;
const mqtt = require('mqtt');
const app = connect();

var configIni = require('config.ini');

const PASS = process.env.UTIM_SESSION_KEY;
const PORT = 4303;

async function Start() {
	await core.init(PASS);

	let stream = net.createServer([
		core.getWallets,
		core.getMyDeviceWallets,
		core.getAddressesInWallet,
		core.createNewWallet,
		core.createNewAddress,
		core.getWalletBalance,
		core.getAddressBalance,
		core.sendTextMessageToDevice,
		core.sendTechMessageToDevice,
		core.sendPaymentFromWallet,
		core.sendPaymentFromWalletUseUnstableUnits,
		core.getListTransactionsForAddress,
		core.getListTransactionsForWallet,
		core.myAddressInfo,
		core.signDevicePrivateKey,
		core.signWithAddress,
		core.verifySign,
		core.addCorrespondent,
		core.removeCorrespondent,
		core.listCorrespondents
	]);

    app.use(cors({methods: ['POST']}));
    app.use(jsonParser());
    app.use((req, res, next) => req.headers['x-auth'] === PASS ? next() : res.statusCode = 403);
    app.use(stream.middleware());
    app.listen(PORT);

	try {
		let device = require('byteballcore/device');
		var config = configIni.load(__dirname + '/utim/config.ini')
		const client = mqtt.connect('mqtt://' + config.MQTT.hostname);

		var message = config.UTIM.utimname + "\ " + device.getMyDeviceAddress();

		client.on('connect', () => {
			client.publish('back', message);
		});
	}
	catch(error) {
		console.error(error);
	}

	return 'Ok';
};

if(PASS) {
	console.log(PASS);
	Start().then(console.log).catch(console.error);
} else {
	throw new Error('There is no UTIM_SESSION_KEY environment variable in ~/.bashrc file. Launch utim/utim_launcher.py first!');
}
