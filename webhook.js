module.exports = {
    "Logic": function(req, res, callback){
        console.log("Logic Module!");

        callback(null, 'Callback Value')
    }
}