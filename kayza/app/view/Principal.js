Ext.define('Kayza.view.Principal', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelaprincipal',
    height: 690,
    renderTo: Ext.getBody(),
    layout: {
        type: 'vbox', // Arrange child items vertically
        align: 'stretch', // Each takes up full width
        padding: 5
    },
    items: [
        {
            xtype: 'janelatopo'
        },
        {
            xtype: 'janelameio'
        },
        {
            xtype: 'janelarodape'
        }
    ]
});