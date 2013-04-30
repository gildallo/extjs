<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Login extends CI_Controller {

    public function index() {
        
    }

    public function autenticar() {
        
        echo json_encode(array(
		"success" => true,
		"user" => "{id: 1, name: 'Gilcimar', email: 'teste@teste.com'}",
		"msg" => ""
	));
    }

}