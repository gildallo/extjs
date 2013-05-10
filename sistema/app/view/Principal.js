/**
 *
 * Desenvolvido por Gilcimar Dalló
 * Email: gilcimar.dallo@gmail.com
 * Data: Abril/2013
 *
 */

 var tabs = Ext.create('Ext.tab.Panel', {
 });

Ext.define('Sistema.view.Principal', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.janelaprincipal',
    layout: {
        type: 'border'
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
            {
                xtype: 'toolbar',
                region: 'north',
                height: 33,
                items: [
                        {xtype: 'tbspacer', width: 10}, // add a 50px space
                        'Kayza - Sistema de Gerenciamento de Produção',
                        '->',
                        {
                            xtype: 'textfield',
                            name: 'field1',
                            emptyText: 'Código de atalho'
                        },
                        {
                            // xtype: 'button', // default for Toolbars
                            text: 'Encerrar Sistema'
                        }
                        ]
                    },
                    {
                        layout: 'card',
                        id: 'pMenu',
                        region: 'west',
                        border: false,
                        split: true,
                        margins: '2 0 5 5',
                        width: 230,
                        items: []
                    },
                    {
                        xtype: 'toolbar',
                        region: 'south',
                        height: 33,
                        items: [
                        {xtype: 'tbspacer', width: 10}, // add a 50px space
                        'Usuário: Gilcimar Dalló',
                        {xtype: 'tbspacer', width: 50}, // add a 50px space
                        'IP: 189.44.456.21'
                        ]
                    },
                    {
                        id: 'content-panel',
                        region: 'center',
                        margins: '2 5 5 0',
                        border: false,
                        activeItem: 0,
                        layout: 'card',
                        items: tabs
                    }
                    ]
                });

me.callParent(arguments);
}

});