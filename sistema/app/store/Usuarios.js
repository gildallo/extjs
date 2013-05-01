Ext.define('Sistema.store.Usuarios', {
    extend: 'Ext.data.Store',
    model: 'Sistema.model.Usuario',
    pageSize: 22,
    autoLoad: {start: 0, limit: 22},

    proxy: {
        type: 'ajax',
        api: {
            create: 'usuarios/cadastra', 
            read: 'usuarios/lista',
            update: 'usuarios/atualiza',
            destroy: 'usuarios/deleta',
        },
        reader: {
            type: 'json',
            root: 'contatos',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'contatos'
        }
    }
});