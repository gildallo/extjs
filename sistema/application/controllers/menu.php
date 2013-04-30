<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Menu extends CI_Controller {

    public function index() {
        
    }

    public function gerarMenu() {
        
        echo "
                { 
                text: '.',
                children: [{
                    text:'Cadastro',
                    expanded: false,
                    children:[{
                        text:'Usuário',
                        id:'usuariosgrid',
                        leaf:true
                    }]
                },{
                    text:'Movimentações',
                    children:[{
                        text:'Teste',
                        id:'teste',
                        leaf:true
                    }]
                }]
                }    
                ";
    }

}