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
        echo json_encode($tablet);
        break;
    case 'filters_brand':
        $brands=select_all_brands();
        echo json_encode($brands);
        break;
}   
?>