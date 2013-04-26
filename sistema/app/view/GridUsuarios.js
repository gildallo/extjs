Ext.define('Sistema.view.GridUsuarios', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.gridusuario',
    bodyPadding: 5,
    items: [{
        xtype: 'datefield',
        fieldLabel: 'Start date'
    }, {
        xtype: 'datefield',
        fieldLabel: 'End date'
    }]
});