<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" href="../resources/css/style_ceramic_fish.css"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script type="text/javascript" src="../resources/javascript/js_ceramic_fish.js"></script>
    </head>
    <body>
        <div class="header">
            <img id="logo" src="../resources/images/fishy.svg">
            <br>
            <div class="media_search">
            <form id="login_form">
                    <button type="button"><a href="./add_photos/add_photos.php">Add Photos</a></button>
                </form>
            </div>
        </div>
        <div class="navigation">
            <span><a href="../index.html">HOME</a></span>
            <span>|</span>
            <span><a href="">CERAMIC FISH ART</a></span>
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
        <div id="product_parent" class="fishy_sales">
            <?php 
            $connection = mysqli_connect("162.241.244.106", "madelyq0_rees", "heybatter123");
            $db = mysqli_select_db($connection, "madelyq0_fishybuisiness");

            $query = mysqli_query($connection, "select * from products");
            while ($row = mysqli_fetch_array($query)) 
            {
                ?>
                <div class="fishies" name="id" value="<?php echo htmlspecialchars($row['ProductId'], ENT_QUOTES); ?>">
                    <img src="<?php echo htmlspecialchars($row['ImageSource'], ENT_QUOTES); ?>" >
                    <p class="fish_name"><?php echo $row['ProductName']; ?></p>
                    <p class="fish_price">$<?php echo $row['ProductPrice']; ?></p>
                    <br>
                </div>

                <?php
            }
                ?>
        </div>
    </body>
</html>