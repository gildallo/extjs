<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Pessoas extends CI_Controller {

    public function index() {

    }

    public function lista() {

// Carrega o Model
        $this->load->model('pessoas_model');

// Recebe os dados
        $start = $this->input->get('start', TRUE);
        $limit = $this->input->get('limit', TRUE);

        $pessoas = $this->pessoas_model->lista(array('start' => $start, 'limit' => $limit));

        $total = $this->pessoas_model->total();

        foreach ($pessoas as $key => $value) {
            foreach ($value as $chave => $valor) {
                $tipo = $this->pessoas_model->tipoPessoa($value->id);
                $arrayPessoa[$key][$chave] = $valor;
                $arrayPessoa[$key]['tipo'] = $tipo;
            }
            
        }

        //print_r($arrayPessoa);

        echo json_encode(array(
            "success" => "true",
            "total" => $total,
            "pessoas" => $arrayPessoa
            ));
    }

    public function atualiza() {

// Carrega o Model
        $this->load->model('pessoas_model');

// Recebe os dados
        $info = $this->input->post('pessoas', TRUE);
        $data = json_decode($info);

        $id = $data->id;
        $dados = array(
            'nome' => $data->nome,
            'cpf_cnpj' => $data->cpf_cnpj,
            'rg_ie' => $data->rg_ie
            );

        $rs = $this->pessoas_model->atualiza($id, $dados);

        echo json_encode(array(
            "success" => "true",
            "pessoas" => array(
                "id" => $data->id,
                "nome" => $data->nome,
                "cpf_cnpj" => $data->cpf_cnpj,
                "rg_ie" => $data->rg_ie
                )
            ));
    }

    public function cadastra() {

// Carrega o Model
        $this->load->model('pessoas_model');

// Recebe os dados
        $info = $this->input->post('pessoas', TRUE);
        $data = json_decode($info);

        $dados = array(
            'nome' => $data->nome,
            'cpf_cnpj' => $data->cpf_cnpj,
            'rg_ie' => $data->rg_ie
            );

        $rs = $this->pessoas_model->cadastra($dados);

        echo json_encode(array(
            "success" => "true",
            "pessoas" => array(
                "id" => mysql_insert_id(),
                "nome" => $data->nome,
                "cpf_cnpj" => $data->cpf_cnpj,
                "rg_ie" => $data->rg_ie
                )
            ));
    }

    public function deleta() {

// Carrega o Model
        $this->load->model('pessoas_model');

// Recebe os dados
        $info = $this->input->post('pessoas', TRUE);
        $data = json_decode($info);

        if (is_array($data)) {

            foreach ($data as $pessoa) {
                $id = $pessoa->id;
                $rs = $this->pessoas_model->deleta($id);
                echo json_encode(array(
                    "success" => "true"
                    ));
            }
        } else {
            $id = $data->id;
            $rs = $this->pessoas_model->deleta($id);
            echo json_encode(array(
                "success" => "true"
                ));
        }
    }

}