Ext.define('Sistema.controller.Usuarios', {
    extend: 'Ext.app.Controller',
    stores: ['Usuarios'],
    models: ['Usuario'],
    views: ['Formulario', 'GridUsuarios'],
    refs: [{
        ref: 'usuariosGrid',
        selector: 'grid'
    }
    ],
    init: function() {
        
        this.control({
            'usuariosgrid dataview': {
                itemdblclick: this.editarContato
            },
            'usuariosgrid button[action=add]': {
                click: this.adicionaContato
            },
            'usuariosgrid button[action=delete]': {
                click: this.deleteContato
            },
            'usuariosgrid button[action=edit]': {
                click: this.editarContato
            },
            'formusuario button[action=save]': {
                click: this.updateContato
            }
        });
    },
    adicionaContato: function() {
        var edit = Ext.create('Sistema.view.Formulario').show();
        edit.setTitle('Novo usuário');
    },
    editarContato: function() {

        var records = this.getUsuariosGrid().getSelectionModel().getSelection();

        if (records.length === 1) {
            var record = records[0];
            var edit = Ext.create('Sistema.view.Formulario').show();
            edit.setTitle('Editando usuário');
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
            record = Ext.create('Sistema.model.Usuario');
            record.set(values);
            this.getUsuariosStore().add(record);
            novo = true;
        }

        win.close();
        this.getUsuariosStore().sync();

        if (novo) { //faz reload para atualziar
            this.getUsuariosStore().reload();
        }
    },
    deleteContato: function() {
        var me = this,
        grid = me.getUsuariosGrid(),
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