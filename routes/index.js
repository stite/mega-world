var Index = require('../controller/web/index');



module.exports = function(app) {
  //首页
  app.get('/', Index.index);

  app.get('/about', Index.about);

  //新闻中心
  app.get('/news_index', Index.news_index);

  //联系我们
  app.get('/contact_us', Index.contact_us);


  // 项目中心
  app.get('/item_index', Index.item_index);

};