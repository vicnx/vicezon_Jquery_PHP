<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/shop/model/shopDAO.php");
session_start();
switch($_GET['op']){
    case 'all':
        $alltablets=select_all_tablets_shop();
        echo json_encode($alltablets);
        break;
    case 'listbybrand':
        include("module/client/module/shop/view/shop.php");
        break;
    case 'getinfobd':
        $tablets_by_brand=select_by_brand($_GET['checks']);
        echo json_encode($tablets_by_brand);
        break;
    case 'details':
        $tablet=select_one_product($_GET['idproduct']);
        addview_product($_GET['idproduct']);
        addview_brand($_GET['idproduct']);
        echo json_encode($tablet);
        break;
    case 'filters_brand':
        $brands=select_all_brands();
        echo json_encode($brands);
        break;
    case 'order_by_price':
        $sentencia=$_GET['sentencia'];
        if (isset($_GET['page'])){
            $page=$_GET['page'];
            if($page == 0){
                echo json_encode($tablets_order=select_products_order($sentencia,$page));
            }else{
                echo json_encode($tablets_order=select_products_order($sentencia,$page*5));
            }
            
        }else{
            echo json_encode($tablets_order=select_products_order($sentencia,"null"));
        }
        break;
    case 'busqueda':
        $sentencia=$_GET['sentencia'];
        $tablets_busqueda=busqueda_nada_null($sentencia);
        echo json_encode($tablets_busqueda);
        exit;
        break;
    case 'pagination':
        $page=$_GET['page'];
        $tablets=pagination($page);
        echo json_encode($tablets);
        exit;
        break;
    case 'do_like':
        if(!isset($_SESSION['username'])){
            echo "no-login";
        }else{
            $username=$_SESSION['username'];
            $idproduct=$_GET['idproduct'];
            $rdo=do_like($idproduct,$username);
            if(!$rdo){
                echo 'Already exists';
            }else{
                echo 'rdo working';
            }
        }
        echo "dentro de do like $";
        break;
    case 'check_likes':
        if(!isset($_SESSION['username'])){
            echo json_encode("no-login");
        }else{
            $username=$_SESSION['username'];
            $rdo=check_likes($username);
            echo json_encode($rdo);
        }
        break;
    case "check_like_click":
        if(!isset($_SESSION['username'])){
            echo "no-login";
        }else{
            $product=$_GET['idproduct'];
            $username=$_SESSION["username"];
            $rdo=check_like_click($username,$product);
            echo json_encode($rdo);
        }
        break;
    case "delete_like":
        if(!isset($_SESSION['username'])){
            echo "no-login";
        }else{
            $product=$_GET['idproduct'];
            $username=$_SESSION["username"];
            $rdo_delete=delete_like($username,$product);
            if(!$rdo_delete){
                echo "no-deleted";
            }else{
                echo "deleted";
            }
        }
        break;
    case "check_likes_details":
        if(!isset($_SESSION['username'])){
            echo "no-login";
        }else{
            $username=$_SESSION["username"];
            $idproduct=$_GET['idproduct'];
            $rdo=check_like_click($username,$idproduct);
            echo json_encode($rdo);
        }
        break;
} 
?>