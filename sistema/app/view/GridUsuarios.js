/**
 *
 * Desenvolvido por Gilcimar Dalló
 * Email: gilcimar.dallo@gmail.com
 * Data: Abril/2013
 *
 */

 Ext.define('Sistema.view.GridUsuarios', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usuariosgrid',
    requires: ['Ext.toolbar.Paging'],
    iconCls: 'icon-grid',
    title: 'Usuários do Sistema',
    selModel: {mode: 'MULTI'},
    store: 'Usuarios',
    height: 574,
    columns: [{
        header: "Código",
        width: 170,
        flex: 1,
        dataIndex: 'id'
    }, {
        header: "Pessoa",
        width: 160,
        flex: 1,
        dataIndex: 'pessoa_id'
    }, {
        header: "Usuário",
        width: 170,
        flex: 1,
        dataIndex: 'usuario'
    }],
    initComponent: function() {

        var store = Ext.data.StoreManager.lookup('Usuarios');
        store.load();

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
            store: 'Usuarios',
            displayInfo: true,
            displayMsg: 'Mostrando Usuários {0} - {1} de {2}',
            emptyMsg: "Nenhum usuário encontrado."
        }];

        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange',this.onSelectChande, this);
    },
    onSelectChande: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
    
});
