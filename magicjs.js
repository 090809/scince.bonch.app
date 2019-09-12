var img;
var size = 0;

var sizes = [];
sizes[0] = [];
sizes[0]['width'] = 700;
sizes[0]['height'] = 500;
sizes[0]['coef'] = 1;

sizes[1] = [];
sizes[1]['width'] = 1000;
sizes[1]['height'] = 700;
sizes[1]['coef'] = 1.42;


sizes[2] = [];
sizes[2]['width'] = 1400;
sizes[2]['height'] = 1000;
sizes[2]['coef'] = 2;

sizes[3] = [];
sizes[3]['width'] = 2000;
sizes[3]['height'] = 1400;
sizes[3]['coef'] = 2.8;


var layerArray = [];
//////////////////////////////////////////////////////////---------------
layerArray['BSImg'] = [];
layerArray['BSImg']['draw'] = true;
layerArray['BSImg']['x'] = 250;
layerArray['BSImg']['y'] = 250;

//////////////////////////////////////////////////////////---------------
layerArray['Image'] = [];
layerArray['Image']['draw'] = true;
layerArray['Image']['scale'] = 1;
layerArray['Image']['x'] = 0;
layerArray['Image']['y'] = 0;

//////////////////////////////////////////////////////////---------------
layerArray['Text'] = [];
layerArray['Text']['draw'] = true;
layerArray['Text']['x'] = 40;
layerArray['Text']['y'] = 100;

//////////////////////////////////////////////////////////---------------
layerArray['Header'] = [];
layerArray['Header']['draw'] = true;
layerArray['Header']['x'] = 40;
layerArray['Header']['y'] = 60;

//////////////////////////////////////////////////////////---------------
layerArray['Tag'] = [];
layerArray['Tag']['draw'] = true;
layerArray['Tag']['x'] = 40;
layerArray['Tag']['y'] = 60;

//////////////////////////////////////////////////////////---------------
layerArray['BG'] = [];
layerArray['BG']['draw'] = true;

//////////////////////////////////////////////////////////---------------


var textSetted = false;
var URL = window.webkitURL || window.URL;
window.onload = function() {
    $("input[type='checkbox']").each(function () {
        $(this).prop("checked", true);
    })
    $( "#amount" ).change(function () {
        $("#amountSpan").html($(this).val() + "%");
        layerArray['Image']['scale'] = $(this).val() * 0.01;

        $('#canvas').setLayer('Image', {
            scale: $(this).val() * 0.01
        }).drawLayers();
    })

    $("#amount").val(100);
    $("#sizes :first").attr("selected", "selected");
    $("#sizes").change(function () {
        size = $("#sizes").val();
        $("#canvas").attr("width", sizes[size]['width']);
        $("#canvas").attr("height", sizes[size]['height']);
        drawCanvas();
    })
}

function drawCanvas() {
    $('#canvas').clearCanvas();
    $('#canvas').removeLayers();

    drawWhite();

    if (layerArray['Image']['draw'])
        drawImage();

    if (layerArray['BSImg']['draw'])
        drawBonchScinceIMG();

    if (layerArray['BG']['draw'])
        drawBG();

    if (layerArray['Header']['draw'])
        drawHeader();

    if (layerArray['Text']['draw'])
        drawText();

    if (layerArray['Tag']['draw'])
        drawTag();

    drawName();

    $("#canvas").drawLayers();
}

function drawBonchScinceIMG() {
    $('#canvas').addLayer({
        type: 'image',
        source: './bonch.science.png',
        x: layerArray['BSImg']['x'] * sizes[size]['coef'],
        y: layerArray['BSImg']['y'] * sizes[size]['coef'],
        width: 549 * sizes[size]['coef'],
        height: 607 * sizes[size]['coef'],
        name: 'BSImg',
        draggable: true,
        dragstop: dragged,
    })
}

function drawImage() {
    if (!$("#image")[0].files[0]) {
        alert("НЕТ ИЗОБРАЖЕНИЯ!!!")
    }
    $('#canvas').addLayer({
        type: "image",
        source: URL.createObjectURL($("#image")[0].files[0]),
        layer: true,
        draggable: true,
        fromCenter: false,
        name: 'Image',
        x: layerArray['Image']['x'] * sizes[size]['coef'],
        y: layerArray['Image']['y'] * sizes[size]['coef'],
        scale: layerArray['Image']['scale'],
        dragstop: dragged,
        fillStyle: "#000"
    })
}

function drawHeader() {
    $('#canvas').addLayer({
        fromCenter: false,

        draggable: true,
        dragstop: dragged,
        type: 'text',
        name: "Header",
        text: $("#header").val(),
        x: layerArray["Header"]['x'] * sizes[size]['coef'],
        y: layerArray["Header"]['y'] * sizes[size]['coef'],

        fillStyle: "#FFF",
        fontFamily: 'RalewayExtraBold',
        fontSize: 24 * sizes[size]['coef'],
        align: "left",

        maxWidth: 500 * sizes[size]['coef'],
    })
}

function drawText() {
    $('#canvas').addLayer({
        fromCenter: false,

        draggable: true,
        dragstop: dragged,
        type: 'text',
        name: "Text",
        text: $("#text").val(),
        x: layerArray["Text"]['x'] * sizes[size]['coef'],
        y: layerArray["Text"]['y'] * sizes[size]['coef'],

        fillStyle: "#FFF",
        fontFamily: 'RalewayMedium',
        fontSize: $("#text_size").val() * sizes[size]['coef'],
        align: "left",
        maxWidth: 600 * sizes[size]['coef']
    })
    
}

function drawTag() {
    $("#canvas").addLayer({
        type: "rectangle",
        name: "tagRect",
        fillStyle: '#ffa420',
        width: 200 * sizes[size]['coef'],
        height: 40 * sizes[size]['coef'],
        x: sizes[size]['width'] - 200 * sizes[size]['coef'],
        y: sizes[size]['height'] - (40 + 27) * sizes[size]['coef'],
        opacity: 0.9,
        fromCenter: false,
    })
    $("#canvas").addLayer({
        type: "text",
        name: "tag_text",
        fillStyle: "#FFF",
        fontFamily: 'RalewayRegular',
        fontSize: 18 * sizes[size]['coef'],
        text: "#" + $("#tag").val(),
        align: "center",
        x: sizes[size]['width'] - (200 - 10) * sizes[size]['coef'],
        y: sizes[size]['height'] - (40 + 27 - 10) * sizes[size]['coef'],
        maxWidth: 200 * sizes[size]['coef'],
        fromCenter: false,
        draggable: true,
        dragstop: dragged,
    })
}

function drawBG() {
    $("#canvas").addLayer({
        type: "rectangle",
        name: "BG",
        fillStyle: '#000',
        opacity: 0.45,
        width: 10000,
        height: 10000,
        x: 0, y: 0,
    })
}

function drawWhite() {
    $("#canvas").addLayer({
        type: "rectangle",
        name: "white",
        fillStyle: '#FFF',
        width: 10000,
        height: 10000,
        x: 0, y: 0,
    })
}

function drawName() {
    $("#canvas").addLayer({
        fromCenter: false,

        type: "text",
        name: "Name",

        fontFamily: 'RalewayLight',
        fontSize: 18 * sizes[size]['coef'],
        fillStyle: '#FFF',
        opacity: 0.45,

        x: 5 * sizes[size]['coef'],
        y: sizes[size]['height'] - 20 * sizes[size]['coef'],
        text: "Bonch.Science",
    })
}

function dbclick(obj) {
    $("input[type='checkbox']").each(function () {
        if ($(this) != obj) $(this).click();
    })
    obj.click();
}

function dragged(layer) {
    layerArray[layer.name]['x'] = layer.x / sizes[size]['coef'];
    layerArray[layer.name]['y'] = layer.y / sizes[size]['coef'];
    layerArray[layer.name]['scale'] = layer.scale;
}

function setchecked(obj, name) {
    layerArray[name]['draw'] = obj.prop('checked');
    drawCanvas();
}

function save() {
    var c=document.getElementById("canvas");
    var d=c.toDataURL("image/png");
    var w=window.open('about:blank','image from canvas');
    w.document.write("<img src='"+d+"' alt='from canvas'/>");
}