<?php 

$dbHost = 'Localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbname = 'formulario-test';

$conexao = new mysql($dbHost, $dbUsername, $dbPassword, $dbname,)

if($conexao -> connect_errno)
{
    echo"Erro";
}
else{
    echo"Conexão efetuada com sucesso";
}
?>