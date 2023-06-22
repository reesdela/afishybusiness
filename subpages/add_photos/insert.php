<?php 
$connection = mysqli_connect("162.241.244.106", "madelyq0_rees", "heybatter123");
$db = mysqli_select_db($connection, "madelyq0_fishybuisiness");

$image_name = mysqli_real_escape_string($connection, $_POST['imgName']);
$URL = "http://afishybusiness.net/resources/images/sale/";
$price = mysqli_real_escape_string($connection, $_POST['imgPrice']);

$target_dir = "../../resources/images/sale/";
$target_file = $target_dir . basename($_FILES["imgInp"]["name"]);
$URL = "http://afishybusiness.net/resources/images/sale/" . basename($_FILES["imgInp"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["imgInp"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

if (file_exists($target_file)) {
  echo "Sorry, file with that name already exists.";
  $uploadOk = 0;
}
else
{
if(move_uploaded_file($_FILES["imgInp"]["tmp_name"], $target_file)) {
    $sql = "INSERT INTO products (ImageSource, ProductName, ProductPrice) VALUES ('$URL', '$image_name', '$price')";
    if(mysqli_query($connection, $sql)) {
        mysqli_close($connection);
        header("Location: https://afishybusiness.net", true, 301);
    }
}
}
?>