const jayson = require('jayson');

let stream = jayson.client.http({port:4303, headers:{'X-AUTH': 123456}});

stream.request('getMyDeviceWallets', [], (err, state) => {
    if(err)
        throw err;

    console.log(state);
});