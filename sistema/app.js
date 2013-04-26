Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    controllers: [
        'Login'
    ],
    views: [
        'Principal',
        'GridUsuarios',
        'Teste'
    ],
    autoCreateViewport: true,
    name: 'Sistema'
});
