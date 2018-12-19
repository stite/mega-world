/**
 * Created by guocg on 2018/12/19.
 */

// 首页
exports.index = function(req, res) {
    res.render('website/index/index');
};

// 新闻中心
exports.news_index = function(req, res) {
    res.render('website/news/news_index');
};

// 联系我们
exports.contact_us = function(req, res) {
    res.render('website/contact_us/contact_us');
};

// 项目中心
exports.item_index = function(req, res) {
    res.render('website/item/item_index');
}