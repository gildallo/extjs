var store = Ext.create('Ext.data.TreeStore', {
    root: {
        expanded: true
    },
    proxy: {
        type: 'ajax',
        url: 'tree-data.json'
    }
});

// Go ahead and create the TreePanel now so that we can use it below
var treePanel = Ext.create('Ext.tree.Panel', {
    id: 'tree-panel',
    title: 'Menus',
    region: 'north',
    split: true,
    width: 200,
    minSize: 200,
    rootVisible: false,
    autoScroll: true,
    store: store
});

var tabs = Ext.create('Ext.tab.Panel', {
    id: 'janela-principal',
    width: 1100,
    style: 'background-color:#dfe8f6; ',
    defaults: {bodyStyle: 'padding:15px'},
    items: [{
            xtype: 'inicial'
        }]
});

Ext.define('Kayza.view.Meio', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.janelameio',
    height: 620,
    layout: {
        type: 'hbox', // Arrange child items vertically
        align: 'stretch', // Each takes up full width
        margins: '2 0 5 5'
    },
    items: [
        treePanel,
        tabs
    ]
});