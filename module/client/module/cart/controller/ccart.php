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
}
?>