var wms_layers = [];


        var lyr_YandexSatellite_0 = new ol.layer.Tile({
            'title': 'Yandex Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://sat04.maps.yandex.net/tiles?l=sat&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_quickwkt_2 = new ol.format.GeoJSON();
var features_quickwkt_2 = format_quickwkt_2.readFeatures(json_quickwkt_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_quickwkt_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_quickwkt_2.addFeatures(features_quickwkt_2);
var lyr_quickwkt_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_quickwkt_2, 
                style: style_quickwkt_2,
                interactive: true,
                title: '<img src="styles/legend/quickwkt_2.png" /> quickwkt'
            });
var format_ebuilding_3 = new ol.format.GeoJSON();
var features_ebuilding_3 = format_ebuilding_3.readFeatures(json_ebuilding_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ebuilding_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ebuilding_3.addFeatures(features_ebuilding_3);
var lyr_ebuilding_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ebuilding_3, 
                style: style_ebuilding_3,
                interactive: true,
                title: '<img src="styles/legend/ebuilding_3.png" /> e — building'
            });
var format_w_4 = new ol.format.GeoJSON();
var features_w_4 = format_w_4.readFeatures(json_w_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_w_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_w_4.addFeatures(features_w_4);
var lyr_w_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_w_4, 
                style: style_w_4,
                interactive: true,
                title: '<img src="styles/legend/w_4.png" /> w'
            });

lyr_YandexSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_quickwkt_2.setVisible(true);lyr_ebuilding_3.setVisible(true);lyr_w_4.setVisible(true);
var layersList = [lyr_YandexSatellite_0,lyr_OSMStandard_1,lyr_quickwkt_2,lyr_ebuilding_3,lyr_w_4];
lyr_quickwkt_2.set('fieldAliases', {'fid': 'fid', 'name': 'name', });
lyr_ebuilding_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'address': 'address', });
lyr_w_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'boundary': 'boundary', 'admin_level': 'admin_level', 'substation': 'substation', 'rating': 'rating', 'operator': 'operator', 'official_short_type': 'official_short_type', 'location': 'location', 'branch': 'branch', 'barrier': 'barrier', 'voltage': 'voltage', 'power': 'power', 'frequency': 'frequency', 'circuits': 'circuits', 'cables': 'cables', 'layer': 'layer', 'bridge': 'bridge', 'ref': 'ref', 'name:ru': 'name:ru', 'name:en': 'name:en', 'name': 'name', 'highway': 'highway', });
lyr_quickwkt_2.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', });
lyr_ebuilding_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'address': '', });
lyr_w_4.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'boundary': '', 'admin_level': '', 'substation': '', 'rating': '', 'operator': '', 'official_short_type': '', 'location': '', 'branch': '', 'barrier': '', 'voltage': '', 'power': '', 'frequency': '', 'circuits': '', 'cables': '', 'layer': '', 'bridge': '', 'ref': '', 'name:ru': '', 'name:en': '', 'name': '', 'highway': '', });
lyr_quickwkt_2.set('fieldLabels', {'fid': 'no label', 'name': 'no label', });
lyr_ebuilding_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'address': 'no label', });
lyr_w_4.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'boundary': 'no label', 'admin_level': 'no label', 'substation': 'no label', 'rating': 'no label', 'operator': 'no label', 'official_short_type': 'no label', 'location': 'no label', 'branch': 'no label', 'barrier': 'no label', 'voltage': 'no label', 'power': 'no label', 'frequency': 'no label', 'circuits': 'no label', 'cables': 'no label', 'layer': 'no label', 'bridge': 'no label', 'ref': 'no label', 'name:ru': 'no label', 'name:en': 'no label', 'name': 'no label', 'highway': 'no label', });
lyr_w_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});