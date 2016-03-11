<?php  require_once 'sessionStart.php'; ?>
<!DOCTYPE html>
<html lang="en">

	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/styles.css">
	<body>
	<form action='zipFiles.php' method="Post">

		<div class="header">
			<a class="buttonLinks" href="javascript:void(0);" onclick="runCode();">Run</a>
			<a class="buttonLinks" href="javascript:void(0);" onclick="saveStrings();">Save</a>
			<a class="buttonLinks" href="javascript:void(0);" onclick="forkBranch();">Fork</a>
			<input type="submit" id="zipForm" value="Zip" />
		</div>


		<div class=" titleDivs">
			HTML
		</div>
		<div class=" titleDivs">
			CSS
		</div>
			<textarea name="textHtmlString" id="textHtmlDiv"></textarea>
			<div type="text" name="htmlString" form="zipForm" class=" squareDivs" id="htmlDiv">
			</div>
			<textarea name="textCssString" id="textCssDiv"></textarea>
			<div type="text" name="cssString" form="zipForm" class=" squareDivs" id="cssDiv">
			</div>

		<div class=" titleDivs">
			JAVASCRIPT
		</div>
		<div class=" titleDivs">
			RESULT
		</div>
		<div>
			<textarea name="textJavascriptString" id="textJavascriptDiv"></textarea>
			<div type="text" name="javascriptString" form="zipForm" class="squareDivs" id="javascriptDiv">
			</div>

			<div id="resultsDiv" class="squareDivs">
				
				<iframe id="myFrame">
						<p>Your browser does not support iframes.</p>
				</iframe>
			</div>
		</div>
	</form>

<?php
	if(isset($_GET['projectId']))
	{
		$_SESSION['projectId'] = $_GET['projectId'];
	}else
	{
		$_SESSION['projectId'] = 0;
	}
	if(isset($_GET['branchId']))
	{
		$_SESSION['branchId'] = $_GET['branchId'];
	}else
	{
		$_SESSION['branchId'] = 0;
	}
	if(isset($_GET['commitId']))
	{
		$_SESSION['commitId'] = $_GET['commitId'];
	}else
	{
		$_SESSION['commitId'] = 0;
	}

?>


<script src="ace-builds-master/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>

<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->

<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
<script> 
	 	$('#myframe').contents().find('body').append('asd').end()
	        .find('body').append('<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"><\/script>').end()
	        .find('body').append('<script>$(function() {alert("hello from jquery");console.log("hello from jquery"); })<\/script>');                             

</script> 

<script src="js/bootstrap.min.js" type="text/javascript"></script>
<script src="js/javascript.js" type="text/javascript"></script>

	</body>

</html>
