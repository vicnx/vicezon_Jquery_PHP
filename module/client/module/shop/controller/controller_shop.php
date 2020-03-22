<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/shop/model/shopDAO.php");
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
} 
?>