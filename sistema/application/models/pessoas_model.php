<?php

class Pessoas_model extends CI_Model {

    function lista($options = array()) {
        $query = $this->db->get('pessoa', $options['limit'], $options['start']);
        return $query->result();
    }

    function tipoPessoa($id) {
        $tipo_pessoa = '';
        $this->db->select('tipo_pessoa.descricao AS tipo_pessoa');
        $this->db->join('tipo_pessoa', 'tipo_pessoa.id = relacao_pessoa_tipo.tipo_pessoa_id');
        $this->db->where('pessoa_id', $id);
        $query = $this->db->get('relacao_pessoa_tipo');
        foreach ($query->result() as $row) {
            $tipo_pessoa .= ','.$row->tipo_pessoa;
        }
        return $tipo_pessoa;
    }

    function total() {
        $this->db->select('count(*) as num');
        $query = $this->db->get('pessoa');
        $row = $query->row();
        return $row->num;
    }

    function atualiza($id, $options = array()) {
        $this->db->where('id', $id);
        $query = $this->db->update('pessoa', $options);
        return $query;
    }

    function cadastra($options = array()) {
        $query = $this->db->insert('pessoa', $options);
        return $query;
    }

    function deleta($id) {
        $this->db->where('id', $id);
        $query = $this->db->delete('pessoa');
        return $query;
    }

}

?>