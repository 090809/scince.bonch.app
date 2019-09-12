<?php
/**
 * Created by PhpStorm.
 * User: darkm
 * Date: 06.09.2017
 * Time: 23:30
 */
$image = null;

if (isset($_POST['header'], $_POST['text'])) {
    $image = imagecreatetruecolor(700, 500);
    $upload_file_path = $_FILES['image']['tmp_name'];
    list($width, $height, $type) = getimagesize($upload_file_path);
    switch ($type) {
        case 1:
            $upload_image = imagecreatefromgif($upload_file_path);
            break;
        case 2:
            $upload_image = imagecreatefromjpeg($upload_file_path);
            break;
        case 3:
            $upload_image = imagecreatefrompng($upload_file_path);
            break;

        default:
            die('неподходящий тип файла');
    }
    imagecopy($image, $upload_image, 0, 0, 0, 0, imagesx($upload_image), imagesx($upload_image) * 0.71);

    $c_black = imagecolorallocatealpha($image, 0, 0, 0, 51);
    $c_white = imagecolorallocate($image, 255, 255, 255);

    $logo = imagecreatefrompng(__DIR__ . '/bonch.science.png');

    imagealphablending($image, true);
    imagesavealpha($image, true);
    $logo_normal = imagecreatetruecolor(1050, 750);

    imagesavealpha($logo, true);
    imagecopyresampled($logo_normal, $logo, 0, 0, 0, 0, 810, 900, imagesx($logo), imagesy($logo));

    imagesavealpha($logo_normal, true);
    imagecopymerge($image, $logo_normal, 0, 0, 110, 175, 700, 500, 40);

    imagefilledrectangle($image, 420, 408, 700, 463, imagecolorallocatealpha($image, 255, 194, 110, 40));

    imagettftext($image, 24, 0, 455, 445, $c_white, './RalewayLight.ttf', 'Bonch.Science');

    header('Content-Type: image/png');
    imagepng($image);
    imagedestroy($image);
} else
    die('Что-то пошло не так');
