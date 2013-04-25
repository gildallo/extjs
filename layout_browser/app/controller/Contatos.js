Ext.define('MeuCrud.controller.Contatos', {
    extend: 'Ext.app.Controller',
    stores: ['Contatos'],
    models: ['Contato'],
    views: ['contato.Formulario', 'contato.Grid'],
    refs: [{
            ref: 'contatoPanel',
            selector: 'panel'
        }, {
            ref: 'contatoGrid',
            selector: 'grid'
        }
    ],
    init: function() {
        this.control({
            'contatogrid dataview': {
                itemdblclick: this.editarContato
            },
            'contatogrid button[action=add]': {
                click: this.adicionaContato
            },
            'contatogrid button[action=delete]': {
                click: this.deleteContato
            },
            'contatogrid button[action=edit]': {
                click: this.editarContato
            },
            'contatoform button[action=save]': {
                click: this.updateContato
            }
        });
    },
    adicionaContato: function() {
        var edit = Ext.create('MeuCrud.view.contato.Formulario').show();
        edit.setTitle('Novo contato');
    },
    editarContato: function() {

        var records = this.getContatoGrid().getSelectionModel().getSelection();

        if (records.length === 1) {
            var record = records[0];
            var edit = Ext.create('MeuCrud.view.contato.Formulario').show();
            edit.setTitle('Editando contato');
            edit.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('Erro', 'Selecione apenas um registro');
        }
    },
    updateContato: function(button) {

        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        var novo = false;

        if (values.id > 0) {
            record.set(values);
        } else {
            record = Ext.create('MeuCrud.model.Contato');
            record.set(values);
            this.getContatosStore().add(record);
            novo = true;
        }

        win.close();
        this.getContatosStore().sync();

        if (novo) { //faz reload para atualziar
            this.getContatosStore().reload();
        }
    },
    deleteContato1: function(button) {

        var grid = this.getContatoGrid(),
                record = grid.getSelectionModel().getSelection(),
                store = this.getContatosStore();

        store.remove(record);
        this.getContatosStore().sync();

        //faz reload para atualziar
        this.getContatosStore().reload();
    },
    deleteContato: function() {
        var me = this,
                grid = me.getContatoGrid(),
                store = grid.getStore(),
                records = grid.getSelectionModel().getSelection();

        if (records.length === 0) {
            Ext.Msg.alert('Erro', 'Nenhuma linha selecionada');
        } else {
            Ext.Msg.show({
                title: 'Confirmação',
                msg: 'Tem certeza que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons: Ext.Msg.YESNO,
                icon: Ext.MessageBox.WARNING,
                scope: this,
                width: 450,
                fn: function(btn, ev) {
                    if (btn == 'yes') {
                        store.remove(records);
                        store.sync();
                    }
                    
                }
            });
        }
    }
});