Ext.define('Sistema.view.Teste', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.teste',
    bodyPadding: 5,  // Don't want content to crunch against the borders
    width: 300,
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date'
    }, {
        xtype: 'datefield',
        fieldLabel: 'End date'
    }]
});