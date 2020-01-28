<?php
function randomname(){
    $principio=array( "Xiaomi", "Samsung", "Honor", "IPad", "huawei", "Realme", "Cubot", "Oppo",
    "Xtrem", "Windows", "Alcatel", "Nokia", "Meizu", "Umidgi" );
    $medio=array( " air", " mi", " plus", " note", " pad", " tab", " M", "Z", " A", " B", " C"," D", " F", " G", " H", " I", " J", " Version", " P", " R");
    $principiorand=$principio[array_rand($principio)];
    $mediorand=$medio[array_rand($medio)];
    $final=$principiorand . $mediorand;
    return $final;
}
function dummies(){
    for ($i=0;$i<20;$i++){
        $data = [
            "nombre" => randomname(),
            "fpublic" => "12/02/2019",
            "price" =>"1000",
            "marca" => "Null",
            'colores' => Array ( "Azul:Negro:Blanco:Rojo" ),
            "sim"=> "Yes"
        ];
        $tabletdao= new TabletsDAO();
        if(FindNameTablet($data['nombre'])==false){
            $tabletdao->save($data);
        }

    }
}
?>