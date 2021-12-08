var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_leseu_building_1 = new ol.format.GeoJSON();
var features_leseu_building_1 = format_leseu_building_1.readFeatures(json_leseu_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_leseu_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_leseu_building_1.addFeatures(features_leseu_building_1);
var lyr_leseu_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_leseu_building_1, 
                style: style_leseu_building_1,
                interactive: true,
    title: 'leseu_building<br />\
    <img src="styles/legend/leseu_building_1_0.png" /> 中<br />\
    <img src="styles/legend/leseu_building_1_1.png" /> 廢<br />\
    <img src="styles/legend/leseu_building_1_2.png" /> B<br />\
    <img src="styles/legend/leseu_building_1_3.png" /> M<br />\
    <img src="styles/legend/leseu_building_1_4.png" /> R<br />\
    <img src="styles/legend/leseu_building_1_5.png" /> T<br />\
    <img src="styles/legend/leseu_building_1_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_leseu_building_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_leseu_building_1];
lyr_leseu_building_1.set('fieldAliases', {'fid': 'fid', 'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr_leseu_building_1.set('fieldImages', {'fid': 'TextEdit', 'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr_leseu_building_1.set('fieldLabels', {'fid': 'no label', 'Build_STR': 'inline label', 'Build_NO': 'header label', });
lyr_leseu_building_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});