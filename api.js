var request = require("request");

module.exports = {
    "GetLeaveAPI": function(description, employee_id, start_date, end, callback){
 

        var options = { method: 'GET',
        url: 'http://localhost:8080/ftp44/api/leaveDetails/1000',
        headers: 
        { 'Postman-Token': 'e80bf7b5-b257-4bbc-b805-78639870189b',
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
