<?php
/**
 * Created by PhpStorm.
 * User: darkm
 * Date: 05.09.2017
 * Time: 11:28
 */
?>

<html>
<head>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="jcanvas.min.js"></script>
    <script src="magicjs.js"></script>
    <title>Генератор картинок для постов Bonch.Science</title>
    <style>
        @font-face {
            font-family: RalewayExtraBold; /* Гарнитура шрифта */
            src: url(RalewayExtraBold.ttf); /* Путь к файлу со шрифтом */
        }
        @font-face {
            font-family: RalewayLight; /* Гарнитура шрифта */
            src: url(RalewayLight.ttf); /* Путь к файлу со шрифтом */
        }
        @font-face {
            font-family: RalewayMedium; /* Гарнитура шрифта */
            src: url(RalewayMedium.ttf); /* Путь к файлу со шрифтом */
        }
        @font-face {
            font-family: RalewayRegular; /* Гарнитура шрифта */
            src: url(RalewayRegular.ttf); /* Путь к файлу со шрифтом */
        }
        input[type="checkbox"] {
            float: right;
        }
    </style>
</head>
<body style="display: flex; height: 90%">
    <div>
        <div style="width: 330px; border-right: 2px solid; margin-right: 20px; ">
            <input placeholder="Заголовок" name="header" id="header">
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'Header')" ondblclick="dbclick($(this))">
            <br><br>
            <input placeholder="Тег" name="tag" id="tag">
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'Tag')" ondblclick="dbclick($(this))">
            <br><br>
            <textarea placeholder="Текст поста" name="text" id="text"></textarea>
            <br>
            <span>Размер шрифта в PX</span>
            <input id="text_size" style="width: 30px" value="24">
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'Text')" ondblclick="dbclick($(this))">
            <br><br>
            <input type="file" id="image" name="image">
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'Image')" ondblclick="dbclick($(this))">
            <br><br>
            <span id="amountSpan" style="margin-left: 50px">100%</span>
            <br>
            <input id="amount" type="range" min="0" max="200" step="1" value="100">
            <br><br>
            <span>Отображать фигуру?</span>
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'BSImg')" ondblclick="dbclick($(this))">
            <br><br>
            <span>Отображать фон?</span>
            <input type="checkbox" checked="checked" onclick="setchecked($(this), 'BG')" ondblclick="dbclick($(this))">
            <br><br>
            <select id="sizes">
                <option value="0" selected="selected">700 x 500</option>
                <option value="1">1000 x 700</option>
                <option value="2">1400 x 1000</option>
                <option value="3">2000 x 1400</option>
            </select>
            <br><br>
            <button onclick="drawCanvas()">Отрисовать</button>
            <br><br>
            <button onclick="save()">Сохранить</button>
        </div>
    </div>
    <div>
        <canvas id="canvas" width="700" height="500" style="border: 1px solid black; position: relative; display: block;"></canvas>
    </div>
</body>
</html>