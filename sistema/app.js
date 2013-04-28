/**
 *
 * Arquivo inicial do sistema responsável por carregar as configurações da aplicação
 * Desenvolvido por Gilcimar Dalló
 * Email: gilcimar.dallo@gmail.com
 * Data: Abril/2013
 *
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    controllers: [
        'Login',
        'Usuarios'
    ],
    views: [
        'Principal',
        'Teste'
    ],
    autoCreateViewport: true,
    name: 'Sistema',
    launch: function() {
        var hideMask = function() {
            Ext.get('loading').remove();
            Ext.fly('loading-mask').animate({
                opacity: 0,
                remove: true
            });
        };
        Ext.defer(hideMask, 250);
    }
});
