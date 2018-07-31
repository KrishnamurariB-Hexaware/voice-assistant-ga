var apiLibrary = require('./api')

module.exports = {
    "ApplyLeave": function(req, res, callback){
        console.log("ApplyLeave Module!");

        var description = req.body.queryResult.parameters.desc;
        var employee_id = req.body.queryResult.parameters.emp_id;
        var start_date = req.body.queryResult.parameters.start_date;
        var end = req.body.queryResult.parameters.end_date;

        apiLibrary.GetLeaveAPI(description, employee_id, start_date, end, (err, result)=>{
            console.log("Response from API : " + JSON.stringify(result))
            callback(null, result.value)
        })

        
    },

    "GetLeaveStatus": function(req, res, callback){
        console.log("GetLeaveStatus Module!");

        var description = req.body.queryResult.parameters.desc;
        var employee_id = req.body.queryResult.parameters.emp_id;
        var start_date = req.body.queryResult.parameters.start_date;
        var end = req.body.queryResult.parameters.end_date;

        
        callback(null, 'Callback Value')
    }
}