/**
 *
 * Modelo de Login usando MCV
 * Desenvolvido por Ricardo Hirashiki
 * Publicado em: http://www.sitedoricardo.com.br
 * Data: Ago/2011
 *
 */
 
Ext.Loader.setConfig({
  enabled : true,
  paths   : {SampleApp:'app'}
});

        
Ext.application({
  name               : 'SampleApp',
  autoCreateViewport : true,
  paths              : {'Ext.ux': 'app/ux'},
  requires           : ['Ext.ux.Initialization'],
  appFolder          : 'app',
  controllers        : ['Viewport'],
  enableRouter       : true,
  routes: {
    '/'           : 'viewport#index'        ,
    //'validate'    : 'viewport#validate'        ,
    'login'       : 'authentication#index',
    'home'        : 'home#index'
  },
  launch: function() {
    var hideMask = function () {
      Ext.get('loading').remove();
      Ext.fly('loading-mask').animate({
        opacity : 0,
        remove  : true
      });
    };
    Ext.defer(hideMask, 250);
  }
});