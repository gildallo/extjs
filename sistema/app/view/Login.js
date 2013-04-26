/**
 *
 * Interface de Login
 * Desenvolvido por Gilcimar Dalló
 * Data: Abril/2013
 *
 */
Ext.define('Sistema.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.painellogin',
    layout: 'fit',
    bodyStyle: 'padding:10px;',
    title: 'Autenticação',
    id: 'authentication-login',
    autoShow: true,
    labelAlign: 'left',
    closable: false,
    draggable: false,
    constrain: true,
    resizable: false,
    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                baseCls: 'x-plain',
                border: false,
                bodyStyle: "padding: 10px;",
                waitMsgTarget: true,
                labelAlign: "left",
                items: [
                    {
                        xtype: 'textfield',
                        name: 'l',
                        id: 'l',
                        fieldLabel: 'Usuário',
                        allowBlank: false,
                        blankText: 'Usuário Obrigatório',
                        msgTarget: 'side',
                        selectOnFocus: true,
                        enableKeyEvents: true
                    }, {
                        xtype: 'textfield',
                        inputType: 'password',
                        name: 's',
                        id: 's',
                        fieldLabel: 'Senha',
                        allowBlank: false,
                        blankText: 'Senha Obrigatória',
                        msgTarget: 'side',
                        selectOnFocus: true,
                        enableKeyEvents: true
                    }
                ]
            }
        ];
        this.buttons = [
            {
                xtype: 'label',
                style: {color: '#ff0000'},
                id: 'msgField',
                width: 150
            }, {
                text: '<b>Entrar</b>',
                action: 'trylogin'
            }
        ];
        this.callParent(arguments);
    }
});