<?php
$path = $_SERVER['DOCUMENT_ROOT'] . '/vicezon/';
include($path . "module/client/module/shop/model/shopDAO.php");
switch($_GET['op']){
    case 'all':
        $alltablets=select_all_tablets_shop();
        echo json_encode($alltablets);
        break;
}
?>