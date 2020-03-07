<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/search/model/searchDAO.php");
 switch($_GET['op']){
     case 'readbrandsdb':
        $searchDAO = new searchDAO();
        $rdo = $searchDAO->readbrands();
        echo json_encode($rdo);
        exit;
        break;
    case 'autocomplete':
        $searchDAO = new searchDAO();
        $valor=$_GET['busqueda'];
        if(!empty($_GET['brand_selected'])){
            $brand=$_GET['brand_selected'];
        }else{
            $brand=null;
        }
        $rdo = $searchDAO->automplete($brand,$valor);
        // $brand=$_GET['brand_selected'];
        echo json_encode($rdo);
        break;
 }
?>