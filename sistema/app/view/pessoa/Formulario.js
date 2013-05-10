Ext.define('Sistema.view.pessoa.Formulario', {
    extend: 'Ext.window.Window',
    alias: 'widget.formpessoa',
    requires: ['Ext.form.Panel', 'Ext.form.field.Text'],
    title: 'Nova pessoa',
    layout: 'fit',
    autoShow: true,
    width: 280,
    modal: true,
    iconCls: 'icon-user',
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                padding: '5 5 0 5',
                border: false,
                style: 'background-color: #fff;',
                fieldDefaults: {
                    anchor: '100%',
                    labelAlign: 'left',
                    allowBlank: false,
                    combineErrors: true,
                    msgTarget: 'side'
                },
                items: [
                    {
                        xtype: 'textfield',
                        name: 'id',
                        fieldLabel: 'id',
                        hidden: true
                    },
                    {
                        xtype: 'textfield',
                        name: 'nome',
                        fieldLabel: 'Nome'
                    },
                    {
                        xtype: 'textfield',
                        name: 'cpf_cnpj',
                        fieldLabel: 'CPF / CNPJ'
                    },
                    {
                        xtype: 'textfield',
                        name: 'rg_ie',
                        fieldLabel: 'RG / IE'
                    }
                ]
            }
        ];

        this.dockedItems = [{
                xtype: 'toolbar',
                dock: 'bottom',
                id: 'buttons',
                ui: 'footer',
                items: ['->', {
                        iconCls: 'icon-save',
                        text: 'Salvar',
                        action: 'save'
                    }, {
                        iconCls: 'icon-reset',
                        text: 'Cancelar',
                        scope: this,
                        handler: this.close
                    }]
            }];

        this.callParent(arguments);
    }
});
