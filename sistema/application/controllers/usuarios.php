<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Usuarios extends CI_Controller {

    public function index() {
        
    }

    public function lista() {

        // Carrega o Model
        $this->load->model('usuarios_model');

        // Recebe os dados
        $start = $this->input->get('start', TRUE);
        $limit = $this->input->get('limit', TRUE);

        $usuarios = $this->usuarios_model->listaUsuarios(array('start' => $start, 'limit' => $limit));

        $total = $this->usuarios_model->totalUsuarios();

        echo json_encode(array(
            "success" => "true",
            "total" => $total,
            "contatos" => $usuarios
        ));
    }

    public function atualiza() {

        // Carrega o Model
        $this->load->model('usuarios_model');

        // Recebe os dados
        $info = $this->input->post('contatos', TRUE);
        $data = json_decode(stripslashes($info));

        $id = $data->id;
        $dados = array(
            'name' => $data->name,
            'email' => $data->email,
            'phone' => $data->phone
        );
        
        $rs = $this->usuarios_model->atualizaUsuarios($id,$dados);
        
        echo json_encode(array(
		"success" => "true",
		"contatos" => array(
			"id" => $data->id,
			"name" => $data->name,
			"email" => $data->email,
			"phone" => $data->phone
		)
	   ));
        
    }

    public function cadastra() {

        // Carrega o Model
        $this->load->model('usuarios_model');

        // Recebe os dados
        $info = $this->input->post('contatos', TRUE);
        $data = json_decode(stripslashes($info));

        $dados = array(
            'name' => $data->name,
            'email' => $data->email,
            'phone' => $data->phone
        );

        $rs = $this->usuarios_model->cadastraUsuarios($dados);

        echo json_encode(array(
        "success" => "true",
        "contatos" => array(
            "id" => mysql_insert_id(),
            "nome" => $data->name,
            "email" => $data->email,
            "phone" => $data->phone
        )
        ));

    }

    public function deleta() {

        // Carrega o Model
        $this->load->model('usuarios_model');

        // Recebe os dados
        $info = $this->input->post('contatos', TRUE);
        $data = json_decode(stripslashes($info));

        if (is_array($data)) {

            foreach ($data as $contato) {
                $id = $contato->id;
                $rs = $this->usuarios_model->deletaUsuarios($id);
                echo json_encode(array(
                    "success" => "true"
                ));
            }
        } else {
            $id = $data->id;
            $rs = $this->usuarios_model->deletaUsuarios($id);
            echo json_encode(array(
                "success" => "true"
            ));
        }


    }

}