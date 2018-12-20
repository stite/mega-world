/**
 * Created by guocg.cn on 2018/12/20.
 * 首页
 */
var mongoose=require('mongoose');

var  homepage=new mongoose.Schema({
    title:String,
    keywords:String,
    banner: [{url: String}]
});

mongoose.model('Homepage',homepage);