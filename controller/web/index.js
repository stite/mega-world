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

// 关于美佳华
exports.about = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/about/index', { pageName: '关于美佳华', site: result });
    });
};

// 公司简介
exports.profile = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/about/profile', { pageName: '公司简介', site: result });
    });
};
// 企业文化
exports.culture = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/about/culture', { pageName: '企业文化', site: result });
    });
};

// 发展历程
exports.history = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/about/history', { pageName: '企业文化', site: result });
    });
};

// 公司荣誉
exports.honor = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/about/honor', { pageName: '企业文化', site: result });
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