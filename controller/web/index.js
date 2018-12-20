/**
 * Created by guocg on 2018/12/19.
 */
var mongoose = require('mongoose');
var Sitebase = mongoose.model('Sitebase');

// 首页
exports.index = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/index/index', { pageName: '首页', site: result });
    });
};

// 新闻中心
exports.news_index = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/news_index', { pageName: '新闻中心', site: result });
    });
};

// 联系我们
exports.contact_us = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/contact_us/contact_us', { pageName: '联系我们', site: result });
    });
};

// 项目中心
exports.item_index = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_index', { pageName: '项目中心', site: result });
    });
}