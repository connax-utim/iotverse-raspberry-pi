const core = require('biot-core');
const net = require('./core');
const connect = require('connect');
const cors = require('cors');
const jsonParser = require('body-parser').json;
const app = connect();

const PASS = '12345678';
const PORT = 4303;

async function Start() {
	await core.init('test');

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

	return 'Ok';
};

Start().then(console.log).catch(console.error);
