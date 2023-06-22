<!DOCTYPE html>
<html>
    <head>
        <title>A Fishy Business</title>
        <link rel="stylesheet" href="../../resources/css/style_ceramic_fish.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    </head>
    <body>
        <div class="header">
            <img id="logo" src="../../resources/images/fishy.svg">
            <br>
            <div class="media_search">
            <form id="login_form">
                    <button type="button"><a href="#">Add Photos</a></button>
                </form>
            </div>
        </div>
        <div class="navigation">
            <span><a href="../../index.html">HOME</a></span>
            <span>|</span>
            <span><a href="../ceramic_fish.php">CERAMIC FISH ART</a></span>
            <span>|</span>
            <span>CUSTOM ORDER</span>
            <span>|</span>
            <span>SALE</span>
            <span>|</span>
            <span>SHIPPING</span>
            <span>|</span>
            <span>ABOUT US</span>
            <span>|</span>
            <span>FAQ</span>
            <span>|</span>
            <span>CONTACT US</span>
        </div>
        <form action="insert.php" method="post" enctype="multipart/form-data">
            <label for="imgInp">Select image:</label>
            <input type="file" id="imgInp" name="imgInp" accept="image/*">
            <img id="blah" src="#" alt="your image" height="225" width="225"/>
            <label for="imgName">Name:</label>
            <input type="text" id="imgName" name="imgName">
            <label for="imgPrice">Price:</label>
            <input type="number" id="imgPrice" name="imgPrice">
            <input type="submit">
        </form>
        <script>
            imgInp.onchange = evt => {
                const [file] = imgInp.files
                if (file) {
                    blah.src = URL.createObjectURL(file)
                }
            }
        </script>
    </body>
</html>