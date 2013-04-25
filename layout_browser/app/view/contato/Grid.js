Ext.define('MeuCrud.view.contato.Grid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.contatogrid',
    requires: ['Ext.toolbar.Paging'],
    iconCls: 'icon-grid',
    title: 'Contatos',
    selModel: {mode: 'MULTI'},
    store: 'Contatos',
    columns: [{
            header: "NOME",
            width: 170,
            flex: 1,
            dataIndex: 'name'
        }, {
            header: "TELEFONE",
            width: 160,
            flex: 1,
            dataIndex: 'phone'
        }, {
            header: "EMAIL",
            width: 170,
            flex: 1,
            dataIndex: 'email'
        }],
    initComponent: function() {

        this.dockedItems = [{
                xtype: 'toolbar',
                items: [{
                        iconCls: 'icon-save',
                        itemId: 'add',
                        text: 'Adicionar',
                        action: 'add'
                    }, {
                        iconCls: 'icon-delete',
                        itemId: 'delete',
                        text: 'Excluir',
                        action: 'delete'
                    }, {
                        iconCls: 'icon-editar',
                        itemId: 'edit',
                        text: 'Editar',
                        action: 'edit'
                    }]
            },
            {
                xtype: 'pagingtoolbar',
                dock: 'bottom',
                store: 'Contatos',
                displayInfo: true,
                displayMsg: 'Mostrando Contatos {0} - {1} de {2}',
                emptyMsg: "Nenhum contato encontrado."
            }];

        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange',this.onSelectChande, this);
    },
    onSelectChande: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
    
});
