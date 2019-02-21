var Index = require('../controller/web/index');



module.exports = function (app) {
  // 加载
  app.get('/load', Index.load);

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

  //公司新闻
  app.get('/company_news', Index.company_news);

  app.get('/business_news', Index.business_news);

  app.get('/project_news', Index.project_news);
  
  app.get('/guild_news', Index.guild_news);

  //联系我们
  app.get('/contact_us', Index.contact_us);

  // 项目中心
  app.get('/item_index', Index.item_index);

};