var Index = require('../controller/web/index');



module.exports = function (app) {
  //首页
  app.get('/', Index.index);

  // 关于美佳华
  app.get('/about', Index.about);

  // 公司简介
  app.get('/profile', Index.profile);

  // 企业文化
  app.get('/culture', Index.culture);

  // 发展历程
  app.get('/history', Index.history);

  // 公司荣誉
  app.get('/honor', Index.honor);

  //新闻中心
  app.get('/news_index', Index.news_index);

  //联系我们
  app.get('/contact_us', Index.contact_us);


  // 项目中心
  app.get('/item_index', Index.item_index);

};