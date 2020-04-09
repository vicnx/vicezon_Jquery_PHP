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
    case 'insert_cart_bd':
        if(!isset($_SESSION['username'])){
            echo json_encode("no-login");
        }else{
            $username=$_SESSION['username'];
            if ($_POST['cart']=="no-cart"){
                $only_delete=only_delete_cart($username);
                echo json_encode($only_delete);
            }else{
                $only_delete=only_delete_cart($username);
                $cart=$_POST['cart'];
                foreach ($cart as $product){
                    $idproduct=$product['id'];
                    $qty=$product['qty'];
                    $insert=insert_cart($idproduct,$qty,$username);
                }
                echo json_encode($insert);
            }
        }
        break;
    case 'coger_carrito_bd':
        if(!isset($_SESSION['username'])){
            echo json_encode("no-login");
        }else{
            $username=$_SESSION['username'];
            $carrito=select_cart($username);
            echo json_encode($carrito);
        }
        break;
    case 'checkout_check_stock':
        $ok=true;
        $carrito=$_POST['cart'];
        // echo json_encode($cart);
        if(!isset($_SESSION['username'])){
            echo json_encode("no-login");
        }else{
            $username=$_SESSION['username'];
            if($carrito == "no-cart"){
                echo json_encode("no-cart");
            }else{
                foreach ($carrito as $product){
                    $idproduct=$product['id'];
                    $qty=$product['qty'];
                    $check_stock=check_stock($idproduct);
                    if($qty > $check_stock[0]){
                        $ok=false;
                        break;
                    }else{
                        $ok=true;
                    }
                }
                echo json_encode($ok);
            }
        }
        break;
}
?>