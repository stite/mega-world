/**
 * Created by 1 on 2016/5/16.
 */
var mongoose = require('mongoose');
var config = require('./db_url.js');
mongoose.Promise = global.Promise;

module.exports = function () {
    var db = mongoose.connection.openUri(config.mongodb);
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
        console.log('mongodb connected');
    });
    require('../model/user.js');
    require('../model/news.js');
    require('../model/recruit.js');
    require('../model/quit.js');
    require('../model/feedback.js');
    require('../model/sitebase.js');
    return db;
}