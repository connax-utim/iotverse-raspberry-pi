const jayson = require('jayson');


const createServer = (state) => {
    let temporaryState = [];
    for(let stateIndex in state) {
        let stateData = state[stateIndex];

        temporaryState[stateData.name] = async (args, callback) => {
            callback(null, await stateData(...args));
        }
    }

    return new jayson.server(temporaryState);
};

module.exports.createServer = createServer;