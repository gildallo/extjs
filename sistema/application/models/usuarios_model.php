<?php

class Usuarios_model extends CI_Model {

    function listaUsuarios($options = array()) {
        $query = $this->db->get('login', $options['limit'], $options['start']);
        return $query->result();
    }

    function totalUsuarios() {
        $this->db->select('count(*) as num');
        $query = $this->db->get('login');
        $row = $query->row();
        return $row->num;
    }

    function atualizaUsuarios($id,$options = array()) {
        $this->db->where('id', $id);
        $query = $this->db->update('login', $options);
        return $query;
    }

    function cadastraUsuarios($options = array()) {
        $query = $this->db->insert('login', $options); 
        return $query;
    }

    function deletaUsuarios($id) {
        $this->db->where('id', $id);
        $query = $this->db->delete('login');
        return $query;
    }


}

?>