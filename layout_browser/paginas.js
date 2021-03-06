//
// Note that these are all defined as panel configs, rather than instantiated
// as panel objects.  You could just as easily do this instead:
//
// var absolute = Ext.create('Ext.Panel', { ... });
//
// However, by passing configs into the main container instead of objects, we can defer
// layout AND object instantiation until absolutely needed.  Since most of these panels
// won't be shown by default until requested, this will save us some processing
// time up front when initially rendering the page.
//
// Since all of these configs are being added into a layout container, they are
// automatically assumed to be panel configs, and so the xtype of 'panel' is
// implicit.  To define a config of some other type of component to be added into
// the layout, simply provide the appropriate xtype config explicitly.
//
function getBasicLayouts() {
    return {
        /*
         * ================  Start page config  =======================
         */
        // The default start page, also a simple example of a FitLayout.
        inicial: {
            id: 'panel-inicial',
            title: 'Start Page',
            layout: 'fit',
            bodyStyle: 'padding:25px',
            contentEl: 'start-div'  // pull existing content from the page
        },

        abas: {
            xtype: 'tabpanel',
            id: 'panel-abas',
            activeTab: 0,
            style: 'background-color:#dfe8f6; ',
            defaults: {bodyStyle: 'padding:15px'},
            items:[{
                title: 'Tab 1',
                html: 'This is tab 1 content.'
            },{
                title: 'Tab 2',
                html: 'This is tab 2 content.'
            },{
                title: 'Tab 3',
                html: 'This is tab 3 content.'
            }]
        },

        contatos: {
            xtype: 'contatogrid',
            id: 'panel-contatos'
        }
    };
}
