<?php

class Usuarios_model extends CI_Model {

    function listaUsuarios($options = array()) {
        $query = $this->db->get('contact', $options['limit'], $options['start']);
        return $query->result();
    }

    function totalUsuarios() {
        $this->db->select('count(*) as num');
        $query = $this->db->get('contact');
        $row = $query->row();
        return $row->num;
    }

    function atualizaUsuarios($id,$options = array()) {
        $this->db->where('id', $id);
        $this->db->update('contact', $options);
        return $query->result();
    }

}

?>