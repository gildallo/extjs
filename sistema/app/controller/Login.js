Ext.define('Sistema.controller.Login', {
    extend: 'Ext.app.Controller',
    views: ['Login', 'CapsWarningTooltip'],
    init: function() {
        this.control({
            'painellogin button[action=trylogin]': {
                click: this.tryLogin
            },
            'painellogin #l': {
                keypress: this.verifyCapsLock,
                keyup: this.verifyEnter
            },
            'painellogin #s': {
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
                url: 'php/login.php'          //Simula OK
                        , method: 'POST'
                        , scope: this
                        , success: function(form, action) {
                    loginWin.close();
                    var janelaPrincipal = Ext.widget({
                        xtype: 'janelaprincipal',
                    });
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
