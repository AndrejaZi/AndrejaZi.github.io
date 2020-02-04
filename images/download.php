<?php 
 echo 232;

$filename = "images/pdf.png";
if(isset($_GET['file'])){
 
 $filename = $_GET['file'];

}

if(file_exists($filename)){

 header('Content-description: file transfer');
 header('Pragma: public');
 header('Expires: 0');
 header('Cache-Control: must-revalidate, post-check=0, pre-check=0');
 header('Content-Length: ' . filesize($filename));
 header('Content-Disposition: attachment; filename="' . basename($filename) . '"');
 header('Content-Transfer-Encoding: binary');
 
 header('Content-Range: ' . $filename);
 
 readfile($filename);
}else{

 echo "Sorry, that file was not found!";
}

?>