<?php
$file = file("inputbinary.txt");
$first = false;
$last = false;
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>Dev-challenge-2</title>
</head>

<body>
    <div class="container mt-5">
        <?php
        foreach ($file as $rowKey => $line) {
            
            if ($rowKey +1 === count($file)) {
                $last = true;
            }
        ?>
            <div class="row">
                <?php
                $chars = str_split($line);
                foreach ($chars as $charKey => $char) {
                    if ($char === '1') {
                ?>
                        <span id="<?php echo $rowKey . "-" . $charKey; ?>" class="block wall"></span>
                        <?php
                    }
                    if ($char === '0') {
                        if ($first === false) {
                            $first = true;
                        ?>
                            <span id="<?php echo $rowKey . "-" . $charKey; ?>" class="block start"></span>
                        <?php
                        } elseif ($last === true) {
                        ?>
                            <span id="<?php echo $rowKey . "-" . $charKey; ?>" class="block finish"></span>
                            <?php
                        } else {
                        ?>
                            <span id="<?php echo $rowKey . "-" . $charKey; ?>" class="block open"></span>
                    <?php
                        }
                    }
                    ?>
                <?php
                }
                ?>
            </div>
        <?php
        }
        ?>
        <script src="script.js"></script>
    </div>
</body>

</html>