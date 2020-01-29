<div class="contenido">
	<div class="pages">
<?php
	if (isset($_GET['page'])) {
		switch($_GET['page']){
			case "home";
				include("module/client/module/home/view/homepage.php");
				break;
			default;
				include("module/admin/view/inc/error/404.php");
				break;
		}
	}else{
		include("module/client/module/home/view/homepage.php");
	}
?>
	</div>
</div>
