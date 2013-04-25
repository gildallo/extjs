Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', 'ux');

Ext.application({
    name: 'MeuCrud',
    appFolder: 'app',
    controllers: [
        'Contatos'
    ]
});

//
// This is the main layout definition.
//
Ext.onReady(function() {

    Ext.tip.QuickTipManager.init();

    // Gets all layouts examples
    var layoutExamples = [];
    Ext.Object.each(getBasicLayouts(), function(name, example) {
        layoutExamples.push(example);
    });

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
        height: 500,
        minSize: 150,
        rootVisible: false,
        autoScroll: true,
        store: store
    });

    // Assign the changeLayout function to be called on tree node click.
    treePanel.getSelectionModel().on('select', function(selModel, record) {
        if (record.get('leaf')) {
            Ext.getCmp('content-panel').layout.setActiveItem(record.getId());
        }
    });

    // Finally, build the main layout once all the pieces are ready.  This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    Ext.create('Ext.Viewport', {
        layout: 'border',
        title: 'Ext Layout Browser',
        items: [{
                xtype: 'box',
                id: 'header',
                region: 'north',
                html: '<h1>Sistema de Secretaria</h1>',
                height: 30
            }, {
                layout: 'border',
                id: 'layout-browser',
                region: 'west',
                border: false,
                split: true,
                margins: '2 0 5 5',
                width: 290,
                minSize: 100,
                maxSize: 500,
                items: [treePanel]
            }, {
                id: 'content-panel',
                region: 'center',
                layout: 'card',
                margins: '2 5 5 0',
                activeItem: 0,
                border: false,
                items: layoutExamples
            }
        ],
        renderTo: Ext.getBody()
    });
});
