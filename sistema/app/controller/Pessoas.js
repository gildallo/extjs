Ext.define('Sistema.controller.Pessoas', {
    extend: 'Ext.app.Controller',
    stores: ['Pessoas'],
    models: ['Pessoa'],
    views: ['pessoa.Formulario', 'pessoa.GridPessoas'],
    refs: [{
            ref: 'pessoasGrid',
            selector: 'grid'
        }
    ],
    init: function() {
        this.control({
            'pessoasgrid dataview': {
                itemdblclick: this.editarPessoa
            },
            'pessoasgrid button[action=add]': {
                click: this.adicionaPessoa
            },
            'pessoasgrid button[action=delete]': {
                click: this.deletePessoa
            },
            'pessoasgrid button[action=edit]': {
                click: this.editarPessoa
            },
            'formpessoa button[action=save]': {
                click: this.alteraPessoa
            }
        });
    },
    adicionaPessoa: function() {
        var edit = Ext.create('Sistema.view.pessoa.Formulario').show();
        edit.setTitle('Nova pessoa');
    },
    editarPessoa: function() {

        var records = this.getPessoasGrid().getSelectionModel().getSelection();

        if (records.length === 1) {
            var record = records[0];
            var edit = Ext.create('Sistema.view.pessoa.Formulario').show();
            edit.setTitle('Editando pessoa');
            edit.down('form').loadRecord(record);
        } else {
            Ext.Msg.alert('Erro', 'Selecione apenas um registro');
        }
    },
    alteraPessoa: function(button) {
        var win = button.up('window'),
                form = win.down('form'),
                record = form.getRecord(),
                values = form.getValues();

        var novo = false;

        if (values.id > 0) {
            record.set(values);
        } else {
            record = Ext.create('Sistema.model.Pessoa');
            record.set(values);
            this.getPessoasStore().add(record);
            novo = true;
        }

        win.close();
        this.getPessoasStore().sync();

        if (novo) { //faz reload para atualziar
            this.getPessoasStore().reload();
        }
    },
    deletePessoa: function() {
        var me = this,
                grid = me.getPessoasGrid(),
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