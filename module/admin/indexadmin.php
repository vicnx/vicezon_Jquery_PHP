<!DOCTYPE html>
<html>
	<head>
		<?php
			include("view/inc/admin_top_page.php");
			session_start();
		?>
	</head>
	<body>
		<div id="menu">
			<?php include("module/admin/view/inc/sidebar.php"); ?>
		</div>
		<div class="wrapper">
			<?php include("module/admin/view/inc/top-bar.php"); ?>   	

			<?php include("module/admin/view/inc/pages.php"); ?>  
			<!-- FOOTER		 -->
				 	   
			<?php include("module/admin/view/inc/footer.php"); ?>        
		</div>
	</body>
</html>