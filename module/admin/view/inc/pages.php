<div class="contenido">
	<div class="pages">
<?php
echo $_GET['page'];
	if (isset($_GET['page'])) {
		switch($_GET['page']){
			case "dashboard";
				include("module/admin/module/dashboard/dashboard.php");
				break;
			case "controller_tablets";
				include("module/admin/module/tablets/controller/".$_GET['page'].".php");
				unset($_SESSION['mensaje']);
				break;
			case "aboutus";
				include("module/admin/module/aboutus/".$_GET['page'].".php");
				break;
			case "contactus";
				include("module/admin/module/".$_GET['page'].".php");
				break;
			case "result_tablet1";
				include("module/admin/module/tablets/view/".$_GET['page'].".php");
				break;
			case "tablets";
				include("module/admin/module/tablets/view/".$_GET['page'].".php");
				break;
			case "404";
				include("module/admin/view/inc/error".$_GET['page'].".php");
				break;
			case "503";
				include("module/admin/view/inc/error".$_GET['page'].".php");
				break;
			default;
				include("module/admin/view/inc/error/404.php");
				break;
		}
	}else{
		include("module/admin/module/dashboard/dashboard.php");
	}
?>
	</div>
</div>