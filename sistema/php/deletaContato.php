<?php

//chama o arquivo de conexão com o bd
include("conectar.php");

$info = $_POST['contatos'];
$data = json_decode(stripslashes($info));

if (is_array($data)) {

    foreach ($data as $contato) {
        $id = $contato->id;
        $query = sprintf("DELETE FROM contact WHERE id=%d", mysql_real_escape_string($id));
        $rs = mysql_query($query);
        echo json_encode(array(
            "success" => mysql_errno() == 0
        ));
    }
} else {
    $id = $data->id;
    $query = sprintf("DELETE FROM contact WHERE id=%d", mysql_real_escape_string($id));
    $rs = mysql_query($query);
    echo json_encode(array(
        "success" => mysql_errno() == 0
    ));
}
?>