var config = require('./env')
const axios = require('axios')
const util = require('util')

const intro = 'Pingui - https://github.com/sidvanvliet/Pingui \n(i) Pinging back every ' + config.interval + ' second(s)\n'
ping();

setInterval(() => {
    ping();
}, 10000);

function ping() {

    var date = new Date();

    if( config.cleancon == true ) {
        console.clear()
        console.log(intro)
    } else {
        console.log('\n')
    }

    console.log('<Event at ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds() + ">\n")
    console.log('Pinging the server..')

    axios.get(config.receiver, {
        params: {
            token: config.token
        }
    }).then( response => {
        if( util.inspect(response.data) == "'OK'" ) {
            console.log('Pong! The server accepted our ping.');
        } else {
            console.log('Token mismatch! The server denied our ping.. Make sure the tokens in server/env.js and config/config.php match')
        }
    }).catch( error => {
        console.log('The server/host was not able to accept our request..')
    });

}