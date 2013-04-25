Ext.define('Kayza.view.Rodape', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.janelarodape',
    width   : 500,
    items: [
        { xtype: 'tbspacer', width: 10 }, // add a 50px space
        'Usuário: Gilcimar Dalló',
        { xtype: 'tbspacer', width: 50 }, // add a 50px space
        'IP: 189.44.456.21'
    ]
});