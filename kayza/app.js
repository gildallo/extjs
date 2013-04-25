Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('Ext.ux', 'app/ux');

Ext.application({
  name: 'Kayza',
  appFolder: 'app',
  controllers: ['Login']
});

//
// This is the main layout definition.
//
Ext.onReady(function() {
    
    Ext.tip.QuickTipManager.init();
    
    // Finally, build the main layout once all the pieces are ready.  This is also a good
    // example of putting together a full-screen BorderLayout within a Viewport.
    Ext.create('Ext.Viewport', {
        layout: 'border',
        items: [{
                xtype: 'painellogin'
            }
            
        ],
        renderTo: Ext.getBody()
    });
});