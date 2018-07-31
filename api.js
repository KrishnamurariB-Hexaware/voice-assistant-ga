var request = require("request");

module.exports = {
    "GetLeaveAPI": function(description, employee_id, start_date, end, callback){
 

        var options = { method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        headers: 
        { 'Postman-Token': '572f4990-975c-4eee-ba04-14d4e5cea0b1',
            'Cache-Control': 'no-cache' } };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

            console.log(body);
            callback(null, JSON.parse(body))//Add this
        });

    },

    "ApplyLeave": function(x, y, callback){
 

        var options = { method: 'GET',
        url: 'https://api.chucknorris.io/jokes/random',
        headers: 
        { 'Postman-Token': '572f4990-975c-4eee-ba04-14d4e5cea0b1',
            'Cache-Control': 'no-cache' } };

        request(options, function (error, response, body) {
        if (error) throw new Error(error);

            console.log(body);
            callback(null, body)
        });

    }
}