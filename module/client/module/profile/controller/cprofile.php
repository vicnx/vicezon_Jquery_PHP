<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/profile/model/DAOprofile.php");
session_start();
switch($_GET['op']){
    case 'datos_coger';
    if(!isset($_SESSION['username'])){ // si no hay usuario login fail.
        echo json_encode("fail");
        exit;
    }else{ // si hay login envia datos
        $username=$_SESSION['username'];
        $data = select_user_data($username);
        if(!$data){
            echo json_encode("fail");
            exit;
        }else{
            echo json_encode($data);
            exit;
        }
    }
    break;
    case 'facturas':
        if(!isset($_SESSION['username'])){ // si no hay usuario login fail.
            echo json_encode("no-login");
        }else{ // si hay login envia datos
            $username=$_SESSION['username'];
            $data = select_factura($username);
            echo json_encode($data);
        }
        break;
    case 'more_facturas':
        $idfac=$_POST['idfac'];
        $lines=select_fact_lines($idfac);
        echo json_encode($lines);
        break;
    case 'product_data':
        $idproduct=$_POST['idproduct'];
        $product=get_product($idproduct);
        echo json_encode($product);
        break;
}
?>