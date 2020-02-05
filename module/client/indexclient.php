<!DOCTYPE html>
<html>
	<head>
		
		<?php
			include("module/client/view/inc/client_top_page.php");
			if ((isset($_GET['page'])) && ($_GET['page']=="home") ){
				include("module/client/module/home/view/inc/home_top_page.php");
			}else if((isset($_GET['page'])) && ($_GET['page']=="contact") ){
				include("module/client/module/home/view/inc/contact_top_page.php");
			}else{
				include("module/client/module/home/view/inc/home_top_page.php");
			}
			
			session_start();
		?>
	</head>
	<body>
		<div id="menu">
			<?php include("module/client/view/inc/client_menu.php"); ?>
		</div>
		<div class="wrapper">  	
			<?php include("module/client/view/inc/client_header.php"); ?>

			<?php include("module/client/view/inc/client_pages.php"); ?>  
			<!-- FOOTER		 -->
				 	   
			<?php include("module/client/view/inc/client_footer.php"); ?>        
		</div>
	</body>
</html>