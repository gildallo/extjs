Ext.define('Kayza.view.Topo', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.janelatopo',
    width   : 500,
    items: [
        { xtype: 'tbspacer', width: 10 }, // add a 50px space
        'Kayza - Sistema de Gerenciamento de Produção',
        '->',
        {
            xtype    : 'textfield',
            name     : 'field1',
            emptyText: 'Código de atalho'
        },
        {
            // xtype: 'button', // default for Toolbars
            text: 'Encerrar Sistema'
        }
    ]
});