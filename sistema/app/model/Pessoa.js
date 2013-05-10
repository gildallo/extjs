Ext.define('Sistema.model.Pessoa', {
    extend: 'Ext.data.Model',
    fields: ['id', 'datahora', 'nome', 'cpf_cnpj', 'rg_ie', 'endereco', 'numero',
    'complemento', 'bairro', 'cidade', 'uf', 'cep', 'telefone', 'celular', 'email', 'contato', 'obs', 'tipo']
});