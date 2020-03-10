<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/home/model/homeDAO.php");
switch($_GET['op']){
    case 'brands_card':
        $cards_brand=selectbrands_card();
        echo json_encode($cards_brand);
        break;
    case 'toptablets':
        $query=toptablets();
        echo json_encode($query);
        exit;
        break;
    case 'changerank':
        $rank=changerank();
        echo json_encode("success");
        break;
    case 'view_top':
        $offset=$_GET['offset'];
        $tablets=view_top($offset);
        echo json_encode($tablets);
        exit;
        break;
    case 'view_top_brands':
        $offset=$_GET['offset'];
        $brands=view_top_brands($offset);
        echo json_encode($brands);
        exit;
        break;
}
?>