/**
 * Created by guocg.cn on 2018/12/20.
 * 网站基础信息
 */
var mongoose=require('mongoose');

var  sitebase=new mongoose.Schema({
    title:String,
    keywords:String,
    logo:String
});

mongoose.model('Sitebase',sitebase);