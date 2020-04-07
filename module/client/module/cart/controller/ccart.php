<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/cart/model/cartDAO.php");
session_start();
switch($_GET['op']){
    case 'get_products_cart_local':
        $ids=$_GET['idproducts'];
        $productos=select_one_product($ids);
        echo json_encode($productos);
        break;
    case 'checkout':
        if(!isset($_SESSION['username'])){
            echo 'no-login';
            $_SESSION['carrito']="on";
        }else{
            echo 'login';
        }
        break;
    case 'destroy_cart_session':
        unset($_SESSION["carrito"]);
        break;
    case 'comprobar_stock':
        $id=$_GET['idproduct'];
        $product=select_one_product($id);
        echo json_encode($product);
        break;
}
?>