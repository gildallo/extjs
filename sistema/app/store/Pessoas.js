Ext.define('Sistema.store.Pessoas', {
    extend: 'Ext.data.Store',
    model: 'Sistema.model.Pessoa',
    pageSize: 22,
    autoLoad: {start: 0, limit: 22},
    autoLoad: false,
    proxy: {
        type: 'ajax',
        api: {
            create: 'pessoas/cadastra', 
            read: 'pessoas/lista',
            update: 'pessoas/atualiza',
            destroy: 'pessoas/deleta',
        },
        reader: {
            type: 'json',
            root: 'pessoas',
            successProperty: 'success'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'pessoas'
        }
    }
});