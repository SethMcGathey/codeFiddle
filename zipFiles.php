<?php
error_reporting(E_ALL);
ini_set('display_errors', 'on');
	require_once 'sessionStart.php'; 
	require_once 'database.php';


	$javascriptFile = fopen("codeFiddleJavascript.js", "w") or die("Unable to open file!");
	$javascript = $_POST['textJavascriptString'];
	fwrite($javascriptFile, $javascript);
	fclose($javascriptFile);

	$htmlFile = fopen("codeFiddleHtml.html", "w") or die("Unable to open file!");
	$html = $_POST['textHtmlString'];
	fwrite($htmlFile, $html);
	fclose($htmlFile);

	$cssFile = fopen("codeFiddleCss.css", "w") or die("Unable to open file!");
	$css = $_POST['textCssString'];
	fwrite($cssFile, $css);
	fclose($cssFile);
	
	
	$files = array('codeFiddleJavascript.js','codeFiddleHtml.html','codeFiddleCss.css');
	$zipname = 'codeFiddleFiles.zip';
	$zip = new ZipArchive;
	$zip->open($zipname, ZipArchive::CREATE);
	foreach ($files as $file) {
	  $zip->addFile($file);
	}
	zip_close($zip);

	///Then download the zipped file.
	/*header('Content-Type: application/zip');
	header('Content-disposition: attachment; filename=' . $zipname);
	header('Content-Length: ' . filesize($zipname));
	
	readfile($zipname);*/
