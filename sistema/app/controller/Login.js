/**
 *
 * Desenvolvido por Gilcimar Dalló
 * Email: gilcimar.dallo@gmail.com
 * Data: Abril/2013
 *
 */

 Ext.define('Sistema.controller.Login', {
    extend: 'Ext.app.Controller',
    views: ['Login', 'CapsWarningTooltip', 'Principal'],
    init: function() {
        this.control({
            'painellogin button[action=trylogin]': {
                click: this.tryLogin
            },
            'painellogin #txtUsuario': {
                keypress: this.verifyCapsLock,
                keyup: this.verifyEnter
            },
            'painellogin #txtSenha': {
                keypress: this.verifyCapsLock,
                keyup: this.verifyEnter
            }
        });
    },
    tryLogin: function(button) {
        var loginWin = button.up('window');
        var loginForm = loginWin.down('form');
        if (loginForm.getForm().isValid()) {
            var values = loginForm.getValues();
            var ok;
            loginForm.submit({
                url: 'login/autenticar'          //Simula OK
                , method: 'POST'
                , scope: this
                , success: function(form, action) {
                    loginWin.close();
                    var janelaPrincipal = Ext.widget({
                        xtype: 'janelaprincipal',
                    });
                    
                    //Criar o menu
                    var treePanel = Ext.create('Ext.tree.Panel', {
                        id: 'tree-panel',
                        title: 'Menus',
                        region: 'north',
                        split: true,
                        height: 500,
                        minSize: 150,
                        rootVisible: false,
                        autoScroll: true,
                        renderTo: 'pMenu',
                        store: {
                            proxy: {
                                type: 'ajax',
                                url: 'menu/gerarmenu'
                            },
                            root: {
                                expanded: true

                            }
                        }
                    });

                    //Responsável por abrir as paginas selecionadas no menu
                    treePanel.getSelectionModel().on('select', function(selModel, record) {
                        if (record.get('leaf')) {

                            var tab = tabs.add({
                                title: record.get('text'),
                                closable: true,
                                autoScroll: true,
                                items: [
                                {
                                    xtype: record.getId()
                                }
                                ]
                            });

                            tabs.setActiveTab(tab);

                        }
                    });

                    Ext.getCmp('pMenu').items.add(treePanel);
                    Ext.getCmp('pMenu').doLayout();

                    janelaPrincipal.show();

                }
                , failure: function(form, action)
                {
                    var lblField = Ext.ComponentQuery.query('painellogin #msgField')[0];
                    if (lblField) {
                        switch (action.failureType) {
                            case Ext.form.action.Action.CLIENT_INVALID:
                            lblField.setText("Campos inválidos", false);
                            break;
                            case Ext.form.action.Action.CONNECT_FAILURE:
                            lblField.setText("Falha ao conectar no servidor", false);
                            break;
                            case Ext.form.action.Action.SERVER_INVALID:
                            lblField.setText(action.result.msg || "Usuário e/ou senha inválido", false);
                        }
                    }
                }
            });

}
},
factoryCapsWarningToolTip: function() {
        /*
         * Cria a view do tooltip
         */
         if (!this._capswarningtooltip) {
            this._capswarningtooltip = Ext.widget('capswarningtooltip');
        }
        return this._capswarningtooltip;
    },
    verifyCapsLock: function(text, e) {
        var charCode = e.getCharCode();
        if (
            (e.shiftKey && charCode >= 97 && charCode <= 122) ||
            (!e.shiftKey && charCode >= 65 && charCode <= 90)
            ) {
            this.factoryCapsWarningToolTip().show();
        return false;
    } else {
        this.factoryCapsWarningToolTip().hide();
    }
},
verifyEnter: function(txt, e) {
    if (e.getKey() === e.ENTER) {
        e.stopEvent();
        var btn = Ext.ComponentQuery.query('painellogin button[action=trylogin]')[0];
        if (btn) {
            this.tryLogin(btn);
        }
    }
}
});
