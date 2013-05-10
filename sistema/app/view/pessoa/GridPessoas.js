/**
 *
 * Desenvolvido por Gilcimar Dalló
 * Email: gilcimar.dallo@gmail.com
 * Data: Maio/2013
 *
 */

Ext.define('Sistema.view.pessoa.GridPessoas', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.pessoasgrid',
    requires: ['Ext.toolbar.Paging'],
    iconCls: 'icon-grid',
    title: 'Cadastro de Pessoas',
    selModel: {mode: 'MULTI'},
    store: 'Pessoas',
    height: 574,
    columns: [{
            width: 50,
            header: "Código",
            menuDisabled: true,
            sortable: false,
            dataIndex: 'id'
        }, {
            hidden: true,
            header: "Desde de",
            flex: 1,
            dataIndex: 'datahora'
        }, {
            width: 300,
            header: "Nome",
            dataIndex: 'nome'
        }, {
            hidden: true,
            header: "CPF / CNPJ",
            flex: 1,
            dataIndex: 'cpf_cnpj'
        }, {
            hidden: true,
            header: "RG / IE",
            flex: 1,
            dataIndex: 'rg_ie'
        }, {
            hidden: true,
            header: "Endereço",
            flex: 1,
            dataIndex: 'endereco'
        }, {
            hidden: true,
            header: "Número",
            flex: 1,
            dataIndex: 'numero'
        }, {
            hidden: true,
            header: "Complemento",
            flex: 1,
            dataIndex: 'complemento'
        }, {
            hidden: true,
            header: "Bairro",
            flex: 1,
            dataIndex: 'bairro'
        }, {
            header: "Cidade",
            flex: 1,
            dataIndex: 'cidade'
        }, {
            hidden: true,
            header: "Estado",
            flex: 1,
            dataIndex: 'uf'
        }, {
            hidden: true,
            header: "CEP",
            flex: 1,
            dataIndex: 'cep'
        }, {
            header: "Telefone",
            flex: 1,
            dataIndex: 'telefones'
        }, {
            header: "Celular",
            flex: 1,
            dataIndex: 'celular'
        }, {
            hidden: true,
            header: "Email",
            flex: 1,
            dataIndex: 'email'
        }, {
            hidden: true,
            header: "Contato",
            flex: 1,
            dataIndex: 'contato'
        }, {
            hidden: true,
            header: "Tipo pessoa",
            flex: 1,
            dataIndex: 'tipo'
        }],
    initComponent: function() {

        var store = Ext.data.StoreManager.lookup('Pessoas');
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
                store: 'Pessoas',
                displayInfo: true,
                displayMsg: 'Mostrando pessoa {0} - {1} de {2}',
                emptyMsg: "Nenhuma pessoa encontrado."
            }];

        this.callParent(arguments);
        this.getSelectionModel().on('selectionchange', this.onSelectChande, this);
    },
    onSelectChande: function(selModel, selections) {
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }

});
