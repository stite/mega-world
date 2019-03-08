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

// 商业动态
exports.guild_news = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/guild_news', { pageName: '行业资讯', site: result });
    });
};

// 新闻详情
exports.new_details = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/new_details', { pageName: '行业资讯', site: result });
    });
};

exports.project_news = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/project_news', { pageName: '项目进展', site: result });
    });
};

exports.business_news = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/business_news', { pageName: '商业动态', site: result });
    });
};

exports.company_news = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/news/company_news', { pageName: '公司新闻', site: result });
    });
};

// 加入我们
exports.join_us = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/join/join_us', { pageName: '公司新闻', site: result });
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
// 地产开发
exports.item_land = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_land', { pageName: '项目中心', site: result });
    });
}

// 商业营运
exports.item_business = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_business', { pageName: '项目中心', site: result });
    });
}
// 产业地产
exports.item_industry = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_industry', { pageName: '项目中心', site: result });
    });
}

// 基金管理
exports.item_fund = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_fund', { pageName: '项目中心', site: result });
    });
}

// 物业服务
exports.item_property = function (req, res) {
    Sitebase.findOne(function (err, result) {
        res.render('website/item/item_property', { pageName: '项目中心', site: result });
    });
}

exports.load = function(req, res) {
    res.render('website/index/loading');
}