var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_ReserveBoundary_1 = new ol.format.GeoJSON();
var features_ReserveBoundary_1 = format_ReserveBoundary_1.readFeatures(json_ReserveBoundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveBoundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ReserveBoundary_1.addFeatures(features_ReserveBoundary_1);
var lyr_ReserveBoundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ReserveBoundary_1, 
                style: style_ReserveBoundary_1,
                popuplayertitle: "Reserve Boundary",
                interactive: false,
                title: '<img src="styles/legend/ReserveBoundary_1.png" /> Reserve Boundary'
            });
var format_QuarterSection_2 = new ol.format.GeoJSON();
var features_QuarterSection_2 = format_QuarterSection_2.readFeatures(json_QuarterSection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QuarterSection_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QuarterSection_2.addFeatures(features_QuarterSection_2);
var lyr_QuarterSection_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QuarterSection_2, 
                style: style_QuarterSection_2,
                popuplayertitle: "Quarter Section",
                interactive: false,
                title: '<img src="styles/legend/QuarterSection_2.png" /> Quarter Section'
            });
var format_Wetlands_3 = new ol.format.GeoJSON();
var features_Wetlands_3 = format_Wetlands_3.readFeatures(json_Wetlands_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wetlands_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wetlands_3.addFeatures(features_Wetlands_3);
var lyr_Wetlands_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wetlands_3, 
                style: style_Wetlands_3,
                popuplayertitle: "Wetlands",
                interactive: false,
                title: '<img src="styles/legend/Wetlands_3.png" /> Wetlands'
            });
var format_Buildings_4 = new ol.format.GeoJSON();
var features_Buildings_4 = format_Buildings_4.readFeatures(json_Buildings_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buildings_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buildings_4.addFeatures(features_Buildings_4);
var lyr_Buildings_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Buildings_4, 
                style: style_Buildings_4,
                popuplayertitle: "Buildings",
                interactive: true,
                title: '<img src="styles/legend/Buildings_4.png" /> Buildings'
            });
var format_Roadway_5 = new ol.format.GeoJSON();
var features_Roadway_5 = format_Roadway_5.readFeatures(json_Roadway_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roadway_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roadway_5.addFeatures(features_Roadway_5);
var lyr_Roadway_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roadway_5, 
                style: style_Roadway_5,
                popuplayertitle: "Roadway",
                interactive: true,
                title: '<img src="styles/legend/Roadway_5.png" /> Roadway'
            });
var format_Pipelines_6 = new ol.format.GeoJSON();
var features_Pipelines_6 = format_Pipelines_6.readFeatures(json_Pipelines_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pipelines_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pipelines_6.addFeatures(features_Pipelines_6);
var lyr_Pipelines_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pipelines_6, 
                style: style_Pipelines_6,
                popuplayertitle: "Pipelines",
                interactive: true,
                title: '<img src="styles/legend/Pipelines_6.png" /> Pipelines'
            });
var format_Driveways_7 = new ol.format.GeoJSON();
var features_Driveways_7 = format_Driveways_7.readFeatures(json_Driveways_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Driveways_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Driveways_7.addFeatures(features_Driveways_7);
var lyr_Driveways_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Driveways_7, 
                style: style_Driveways_7,
                popuplayertitle: "Driveways",
                interactive: true,
                title: '<img src="styles/legend/Driveways_7.png" /> Driveways'
            });
var format_WaterValve_8 = new ol.format.GeoJSON();
var features_WaterValve_8 = format_WaterValve_8.readFeatures(json_WaterValve_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterValve_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterValve_8.addFeatures(features_WaterValve_8);cluster_WaterValve_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_WaterValve_8
});
var lyr_WaterValve_8 = new ol.layer.Vector({
                declutter: false,
                source:cluster_WaterValve_8, 
                style: style_WaterValve_8,
                popuplayertitle: "Water Valve",
                interactive: true,
                title: '<img src="styles/legend/WaterValve_8.png" /> Water Valve'
            });
var format_TrafficSignage_9 = new ol.format.GeoJSON();
var features_TrafficSignage_9 = format_TrafficSignage_9.readFeatures(json_TrafficSignage_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficSignage_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficSignage_9.addFeatures(features_TrafficSignage_9);cluster_TrafficSignage_9 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_TrafficSignage_9
});
var lyr_TrafficSignage_9 = new ol.layer.Vector({
                declutter: false,
                source:cluster_TrafficSignage_9, 
                style: style_TrafficSignage_9,
                popuplayertitle: "Traffic Signage",
                interactive: true,
                title: '<img src="styles/legend/TrafficSignage_9.png" /> Traffic Signage'
            });
var format_SepticTank_10 = new ol.format.GeoJSON();
var features_SepticTank_10 = format_SepticTank_10.readFeatures(json_SepticTank_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SepticTank_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SepticTank_10.addFeatures(features_SepticTank_10);cluster_SepticTank_10 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SepticTank_10
});
var lyr_SepticTank_10 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SepticTank_10, 
                style: style_SepticTank_10,
                popuplayertitle: "Septic Tank",
                interactive: true,
                title: '<img src="styles/legend/SepticTank_10.png" /> Septic Tank'
            });
var format_SewerManhole_11 = new ol.format.GeoJSON();
var features_SewerManhole_11 = format_SewerManhole_11.readFeatures(json_SewerManhole_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SewerManhole_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SewerManhole_11.addFeatures(features_SewerManhole_11);cluster_SewerManhole_11 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_SewerManhole_11
});
var lyr_SewerManhole_11 = new ol.layer.Vector({
                declutter: false,
                source:cluster_SewerManhole_11, 
                style: style_SewerManhole_11,
                popuplayertitle: "Sewer Manhole",
                interactive: true,
                title: '<img src="styles/legend/SewerManhole_11.png" /> Sewer Manhole'
            });
var format_Streetlight_12 = new ol.format.GeoJSON();
var features_Streetlight_12 = format_Streetlight_12.readFeatures(json_Streetlight_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Streetlight_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Streetlight_12.addFeatures(features_Streetlight_12);cluster_Streetlight_12 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Streetlight_12
});
var lyr_Streetlight_12 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Streetlight_12, 
                style: style_Streetlight_12,
                popuplayertitle: "Streetlight",
                interactive: true,
                title: '<img src="styles/legend/Streetlight_12.png" /> Streetlight'
            });
var format_PowerlinePoles_13 = new ol.format.GeoJSON();
var features_PowerlinePoles_13 = format_PowerlinePoles_13.readFeatures(json_PowerlinePoles_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerlinePoles_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerlinePoles_13.addFeatures(features_PowerlinePoles_13);cluster_PowerlinePoles_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PowerlinePoles_13
});
var lyr_PowerlinePoles_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PowerlinePoles_13, 
                style: style_PowerlinePoles_13,
                popuplayertitle: "Powerline Poles",
                interactive: true,
                title: '<img src="styles/legend/PowerlinePoles_13.png" /> Powerline Poles'
            });
var format_PetroleumWells_14 = new ol.format.GeoJSON();
var features_PetroleumWells_14 = format_PetroleumWells_14.readFeatures(json_PetroleumWells_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PetroleumWells_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PetroleumWells_14.addFeatures(features_PetroleumWells_14);cluster_PetroleumWells_14 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_PetroleumWells_14
});
var lyr_PetroleumWells_14 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PetroleumWells_14, 
                style: style_PetroleumWells_14,
                popuplayertitle: "Petroleum Wells",
                interactive: true,
                title: '<img src="styles/legend/PetroleumWells_14.png" /> Petroleum Wells'
            });
var format_FireHydrant_15 = new ol.format.GeoJSON();
var features_FireHydrant_15 = format_FireHydrant_15.readFeatures(json_FireHydrant_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FireHydrant_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FireHydrant_15.addFeatures(features_FireHydrant_15);cluster_FireHydrant_15 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_FireHydrant_15
});
var lyr_FireHydrant_15 = new ol.layer.Vector({
                declutter: false,
                source:cluster_FireHydrant_15, 
                style: style_FireHydrant_15,
                popuplayertitle: "Fire Hydrant",
                interactive: true,
                title: '<img src="styles/legend/FireHydrant_15.png" /> Fire Hydrant'
            });
var format_GasMeters_16 = new ol.format.GeoJSON();
var features_GasMeters_16 = format_GasMeters_16.readFeatures(json_GasMeters_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasMeters_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasMeters_16.addFeatures(features_GasMeters_16);cluster_GasMeters_16 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_GasMeters_16
});
var lyr_GasMeters_16 = new ol.layer.Vector({
                declutter: false,
                source:cluster_GasMeters_16, 
                style: style_GasMeters_16,
                popuplayertitle: "Gas Meters",
                interactive: true,
                title: '<img src="styles/legend/GasMeters_16.png" /> Gas Meters'
            });
var format_Culvert_17 = new ol.format.GeoJSON();
var features_Culvert_17 = format_Culvert_17.readFeatures(json_Culvert_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Culvert_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Culvert_17.addFeatures(features_Culvert_17);cluster_Culvert_17 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Culvert_17
});
var lyr_Culvert_17 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Culvert_17, 
                style: style_Culvert_17,
                popuplayertitle: "Culvert",
                interactive: true,
                title: '<img src="styles/legend/Culvert_17.png" /> Culvert'
            });
var format_Cistern_18 = new ol.format.GeoJSON();
var features_Cistern_18 = format_Cistern_18.readFeatures(json_Cistern_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cistern_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cistern_18.addFeatures(features_Cistern_18);cluster_Cistern_18 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Cistern_18
});
var lyr_Cistern_18 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Cistern_18, 
                style: style_Cistern_18,
                popuplayertitle: "Cistern",
                interactive: true,
                title: '<img src="styles/legend/Cistern_18.png" /> Cistern'
            });
var format_AbandonedWells_19 = new ol.format.GeoJSON();
var features_AbandonedWells_19 = format_AbandonedWells_19.readFeatures(json_AbandonedWells_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AbandonedWells_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AbandonedWells_19.addFeatures(features_AbandonedWells_19);cluster_AbandonedWells_19 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_AbandonedWells_19
});
var lyr_AbandonedWells_19 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AbandonedWells_19, 
                style: style_AbandonedWells_19,
                popuplayertitle: "Abandoned Wells",
                interactive: true,
                title: '<img src="styles/legend/AbandonedWells_19.png" /> Abandoned Wells'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_ReserveBoundary_1.setVisible(true);lyr_QuarterSection_2.setVisible(true);lyr_Wetlands_3.setVisible(true);lyr_Buildings_4.setVisible(true);lyr_Roadway_5.setVisible(true);lyr_Pipelines_6.setVisible(true);lyr_Driveways_7.setVisible(true);lyr_WaterValve_8.setVisible(true);lyr_TrafficSignage_9.setVisible(true);lyr_SepticTank_10.setVisible(true);lyr_SewerManhole_11.setVisible(true);lyr_Streetlight_12.setVisible(true);lyr_PowerlinePoles_13.setVisible(true);lyr_PetroleumWells_14.setVisible(true);lyr_FireHydrant_15.setVisible(true);lyr_GasMeters_16.setVisible(true);lyr_Culvert_17.setVisible(true);lyr_Cistern_18.setVisible(true);lyr_AbandonedWells_19.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_ReserveBoundary_1,lyr_QuarterSection_2,lyr_Wetlands_3,lyr_Buildings_4,lyr_Roadway_5,lyr_Pipelines_6,lyr_Driveways_7,lyr_WaterValve_8,lyr_TrafficSignage_9,lyr_SepticTank_10,lyr_SewerManhole_11,lyr_Streetlight_12,lyr_PowerlinePoles_13,lyr_PetroleumWells_14,lyr_FireHydrant_15,lyr_GasMeters_16,lyr_Culvert_17,lyr_Cistern_18,lyr_AbandonedWells_19];
lyr_ReserveBoundary_1.set('fieldAliases', {'INDIAN_ID': 'INDIAN_ID', 'PID': 'PID', 'GEONAME': 'GEONAME', 'GEOCODE': 'GEOCODE', });
lyr_QuarterSection_2.set('fieldAliases', {'FILE_NAME': 'FILE_NAME', 'TRM': 'TRM', 'M': 'M', 'RGE': 'RGE', 'TWP': 'TWP', 'SEC': 'SEC', 'QS': 'QS', 'RA': 'RA', 'PID': 'PID', 'DESCRIPTOR': 'DESCRIPTOR', });
lyr_Wetlands_3.set('fieldAliases', {'WetlandCla': 'WetlandCla', 'hydroPerio': 'hydroPerio', 'Project': 'Project', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Buildings_4.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Type_1': 'Type_1', 'Constructi': 'Constructi', 'Height': 'Height', 'Resident': 'Resident', 'Roof Type': 'Roof Type', 'Exterior W': 'Exterior W', 'Foundation': 'Foundation', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'Name': 'Name', 'Code': 'Code', 'Class': 'Class', 'Category': 'Category', 'Sub-Catego': 'Sub-Catego', 'Quantity': 'Quantity', 'GCR Code': 'GCR Code', 'GCR Descrp': 'GCR Descrp', 'Year Const': 'Year Const', 'Address': 'Address', 'Pole #': 'Pole #', 'Alarm #': 'Alarm #', });
lyr_Roadway_5.set('fieldAliases', {'PROVIDER': 'PROVIDER', 'ROADCLASS': 'ROADCLASS', 'NBRLANES': 'NBRLANES', 'PAVSTATUS': 'PAVSTATUS', 'PAVSURF': 'PAVSURF', 'UNPAVSURF': 'UNPAVSURF', 'L_PLACENAM': 'L_PLACENAM', 'R_PLACENAM': 'R_PLACENAM', 'ROADJURIS': 'ROADJURIS', 'TRAFFICDIR': 'TRAFFICDIR', 'type': 'type', 'Collection': 'Collection', 'Points': 'Points', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Name': 'Name', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_Pipelines_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'LICENCE_NO': 'LICENCE_NO', 'IS_NEB': 'IS_NEB', 'LINE_NO': 'LINE_NO', 'LIC_LI_NO': 'LIC_LI_NO', 'PLLICSEGID': 'PLLICSEGID', 'COMP_NAME': 'COMP_NAME', 'BA_CODE': 'BA_CODE', 'PL_SPEC_ID': 'PL_SPEC_ID', 'SEG_LENGTH': 'SEG_LENGTH', 'SEG_STATUS': 'SEG_STATUS', 'FROM_FAC': 'FROM_FAC', 'FROM_LOC': 'FROM_LOC', 'TO_FAC': 'TO_FAC', 'TO_LOC': 'TO_LOC', 'H2S_R_VOLM': 'H2S_R_VOLM', 'H2S_R_LEVL': 'H2S_R_LEVL', 'H2S_CONT': 'H2S_CONT', 'PIPTECHSTD': 'PIPTECHSTD', 'OUT_DIAMET': 'OUT_DIAMET', 'WALL_THICK': 'WALL_THICK', 'PIPE_TYPE': 'PIPE_TYPE', 'PIPE_GRADE': 'PIPE_GRADE', 'PIP_MATERL': 'PIP_MATERL', 'PIPE_MAOP': 'PIPE_MAOP', 'BIDIRE_IND': 'BIDIRE_IND', 'HDD_IND': 'HDD_IND', 'LINER_GRD': 'LINER_GRD', 'LINER_TYPE': 'LINER_TYPE', 'EXT_COAT': 'EXT_COAT', 'PIPE_ENVIR': 'PIPE_ENVIR', 'CLASS_LOC': 'CLASS_LOC', 'STRESSLEVL': 'STRESSLEVL', 'JOINTMETHD': 'JOINTMETHD', 'INT_COAT': 'INT_COAT', 'FLD_CTR_NM': 'FLD_CTR_NM', 'SUBSTANCE1': 'SUBSTANCE1', 'SUBSTANCE2': 'SUBSTANCE2', 'SUBSTANCE3': 'SUBSTANCE3', 'ORIG_LICNO': 'ORIG_LICNO', 'ORIGPSPPID': 'ORIGPSPPID', 'ORIGLIN_NO': 'ORIGLIN_NO', 'LICAPPDATE': 'LICAPPDATE', 'ORG_ISSUED': 'ORG_ISSUED', 'PERMT_APPR': 'PERMT_APPR', 'PERMT_EXPI': 'PERMT_EXPI', 'LAST_OCCYR': 'LAST_OCCYR', 'TEMPSURFPL': 'TEMPSURFPL', 'GEOM_SRCE': 'GEOM_SRCE', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Driveways_7.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type_2': 'Type_2', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Type_1': 'Type_1', 'Width_2': 'Width_2', 'Length': 'Length', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', 'n': 'n', 'id': 'id', 'Name': 'Name', 'Width': 'Width', 'Type': 'Type', 'layer': 'layer', 'path': 'path', });
lyr_WaterValve_8.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_TrafficSignage_9.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Height': 'Height', 'Size': 'Size', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_SepticTank_10.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Capacity': 'Capacity', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_SewerManhole_11.set('fieldAliases', {'Points': 'Points', 'Points_1': 'Points_1', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Proper Cov': 'Proper Cov', 'Size': 'Size', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_Streetlight_12.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Height': 'Height', 'Foundation': 'Foundation', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_PowerlinePoles_13.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Height': 'Height', 'Attachment': 'Attachment', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_PetroleumWells_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'feature_id': 'feature_id', 'md_tempora': 'md_tempora', 'md_tempo_1': 'md_tempo_1', 'md_horiz_p': 'md_horiz_p', 'md_horiz_1': 'md_horiz_1', 'map_select': 'map_select', });
lyr_FireHydrant_15.set('fieldAliases', {'Points': 'Points', 'Points_1': 'Points_1', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Type_1': 'Type_1', 'Colour': 'Colour', 'Height': 'Height', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_GasMeters_16.set('fieldAliases', {'Points': 'Points', 'Points_1': 'Points_1', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Size': 'Size', 'Model': 'Model', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_Culvert_17.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Constructi': 'Constructi', 'Type_1': 'Type_1', 'Length': 'Length', 'Diameter': 'Diameter', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_Cistern_18.set('fieldAliases', {'Collection': 'Collection', 'Points': 'Points', 'Type': 'Type', 'Point Type': 'Point Type', 'Project Fe': 'Project Fe', 'Created On': 'Created On', 'Lat': 'Lat', 'Lng': 'Lng', 'Image': 'Image', 'Capacity': 'Capacity', 'Usage': 'Usage', 'Constructi': 'Constructi', 'Proper Cov': 'Proper Cov', 'Condition': 'Condition', 'Conditio_1': 'Conditio_1', });
lyr_AbandonedWells_19.set('fieldAliases', {'Licence': 'Licence', 'Licensee': 'Licensee', 'Status': 'Status', 'Lat': 'Lat', 'Long': 'Long', 'Fluid': 'Fluid', 'SurfLoc': 'SurfLoc', 'LicenseeID': 'LicenseeID', 'Address1': 'Address1', 'Address2': 'Address2', 'City': 'City', 'Province': 'Province', 'PostalCode': 'PostalCode', 'Phone': 'Phone', });
lyr_ReserveBoundary_1.set('fieldImages', {'INDIAN_ID': 'TextEdit', 'PID': 'TextEdit', 'GEONAME': 'TextEdit', 'GEOCODE': 'TextEdit', });
lyr_QuarterSection_2.set('fieldImages', {'FILE_NAME': 'TextEdit', 'TRM': 'TextEdit', 'M': 'Range', 'RGE': 'Range', 'TWP': 'Range', 'SEC': 'Range', 'QS': 'TextEdit', 'RA': 'TextEdit', 'PID': 'TextEdit', 'DESCRIPTOR': 'TextEdit', });
lyr_Wetlands_3.set('fieldImages', {'WetlandCla': 'TextEdit', 'hydroPerio': 'TextEdit', 'Project': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Buildings_4.set('fieldImages', {'Collection': '', 'Points': '', 'Type': '', 'Point Type': '', 'Project Fe': '', 'Created On': '', 'Lat': '', 'Lng': '', 'Image': '', 'Type_1': '', 'Constructi': '', 'Height': '', 'Resident': '', 'Roof Type': '', 'Exterior W': '', 'Foundation': '', 'Condition': '', 'Conditio_1': '', 'Name': '', 'Code': '', 'Class': '', 'Category': '', 'Sub-Catego': '', 'Quantity': '', 'GCR Code': '', 'GCR Descrp': '', 'Year Const': '', 'Address': '', 'Pole #': '', 'Alarm #': '', });
lyr_Roadway_5.set('fieldImages', {'PROVIDER': 'TextEdit', 'ROADCLASS': 'TextEdit', 'NBRLANES': 'Range', 'PAVSTATUS': 'TextEdit', 'PAVSURF': 'TextEdit', 'UNPAVSURF': 'TextEdit', 'L_PLACENAM': 'TextEdit', 'R_PLACENAM': 'TextEdit', 'ROADJURIS': 'TextEdit', 'TRAFFICDIR': 'TextEdit', 'type': 'TextEdit', 'Collection': 'TextEdit', 'Points': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Name': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_Pipelines_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'LICENCE_NO': 'TextEdit', 'IS_NEB': 'TextEdit', 'LINE_NO': 'TextEdit', 'LIC_LI_NO': 'TextEdit', 'PLLICSEGID': 'TextEdit', 'COMP_NAME': 'TextEdit', 'BA_CODE': 'TextEdit', 'PL_SPEC_ID': 'TextEdit', 'SEG_LENGTH': 'TextEdit', 'SEG_STATUS': 'TextEdit', 'FROM_FAC': 'TextEdit', 'FROM_LOC': 'TextEdit', 'TO_FAC': 'TextEdit', 'TO_LOC': 'TextEdit', 'H2S_R_VOLM': 'TextEdit', 'H2S_R_LEVL': 'TextEdit', 'H2S_CONT': 'TextEdit', 'PIPTECHSTD': 'TextEdit', 'OUT_DIAMET': 'TextEdit', 'WALL_THICK': 'TextEdit', 'PIPE_TYPE': 'TextEdit', 'PIPE_GRADE': 'TextEdit', 'PIP_MATERL': 'TextEdit', 'PIPE_MAOP': 'TextEdit', 'BIDIRE_IND': 'TextEdit', 'HDD_IND': 'TextEdit', 'LINER_GRD': 'TextEdit', 'LINER_TYPE': 'TextEdit', 'EXT_COAT': 'TextEdit', 'PIPE_ENVIR': 'TextEdit', 'CLASS_LOC': 'TextEdit', 'STRESSLEVL': 'TextEdit', 'JOINTMETHD': 'TextEdit', 'INT_COAT': 'TextEdit', 'FLD_CTR_NM': 'TextEdit', 'SUBSTANCE1': 'TextEdit', 'SUBSTANCE2': 'TextEdit', 'SUBSTANCE3': 'TextEdit', 'ORIG_LICNO': 'TextEdit', 'ORIGPSPPID': 'TextEdit', 'ORIGLIN_NO': 'TextEdit', 'LICAPPDATE': 'DateTime', 'ORG_ISSUED': 'DateTime', 'PERMT_APPR': 'DateTime', 'PERMT_EXPI': 'DateTime', 'LAST_OCCYR': 'TextEdit', 'TEMPSURFPL': 'TextEdit', 'GEOM_SRCE': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Driveways_7.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type_2': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Type_1': 'TextEdit', 'Width_2': 'TextEdit', 'Length': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', 'n': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Width': 'TextEdit', 'Type': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_WaterValve_8.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_TrafficSignage_9.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Height': 'TextEdit', 'Size': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_SepticTank_10.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Capacity': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_SewerManhole_11.set('fieldImages', {'Points': 'TextEdit', 'Points_1': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Proper Cov': 'CheckBox', 'Size': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_Streetlight_12.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Height': 'TextEdit', 'Foundation': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_PowerlinePoles_13.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Height': 'TextEdit', 'Attachment': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_PetroleumWells_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'feature_id': 'TextEdit', 'md_tempora': 'TextEdit', 'md_tempo_1': 'TextEdit', 'md_horiz_p': 'TextEdit', 'md_horiz_1': 'TextEdit', 'map_select': 'Range', });
lyr_FireHydrant_15.set('fieldImages', {'Points': 'TextEdit', 'Points_1': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Type_1': 'TextEdit', 'Colour': 'TextEdit', 'Height': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_GasMeters_16.set('fieldImages', {'Points': 'TextEdit', 'Points_1': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Size': 'TextEdit', 'Model': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_Culvert_17.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Constructi': 'TextEdit', 'Type_1': 'TextEdit', 'Length': 'TextEdit', 'Diameter': 'TextEdit', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_Cistern_18.set('fieldImages', {'Collection': 'TextEdit', 'Points': 'TextEdit', 'Type': 'TextEdit', 'Point Type': 'TextEdit', 'Project Fe': 'TextEdit', 'Created On': 'TextEdit', 'Lat': 'TextEdit', 'Lng': 'TextEdit', 'Image': 'TextEdit', 'Capacity': 'TextEdit', 'Usage': 'TextEdit', 'Constructi': 'TextEdit', 'Proper Cov': 'CheckBox', 'Condition': 'TextEdit', 'Conditio_1': 'TextEdit', });
lyr_AbandonedWells_19.set('fieldImages', {'Licence': 'TextEdit', 'Licensee': 'TextEdit', 'Status': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'Fluid': 'TextEdit', 'SurfLoc': 'TextEdit', 'LicenseeID': 'TextEdit', 'Address1': 'TextEdit', 'Address2': 'TextEdit', 'City': 'TextEdit', 'Province': 'TextEdit', 'PostalCode': 'TextEdit', 'Phone': 'TextEdit', });
lyr_ReserveBoundary_1.set('fieldLabels', {'INDIAN_ID': 'inline label - visible with data', 'PID': 'inline label - visible with data', 'GEONAME': 'inline label - visible with data', 'GEOCODE': 'inline label - visible with data', });
lyr_QuarterSection_2.set('fieldLabels', {'FILE_NAME': 'inline label - visible with data', 'TRM': 'inline label - visible with data', 'M': 'inline label - visible with data', 'RGE': 'inline label - visible with data', 'TWP': 'inline label - visible with data', 'SEC': 'inline label - visible with data', 'QS': 'inline label - visible with data', 'RA': 'inline label - visible with data', 'PID': 'inline label - visible with data', 'DESCRIPTOR': 'inline label - visible with data', });
lyr_Wetlands_3.set('fieldLabels', {'WetlandCla': 'inline label - visible with data', 'hydroPerio': 'inline label - visible with data', 'Project': 'inline label - visible with data', 'Shape_Leng': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_Buildings_4.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Resident': 'inline label - visible with data', 'Roof Type': 'inline label - visible with data', 'Exterior W': 'inline label - visible with data', 'Foundation': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Code': 'inline label - visible with data', 'Class': 'inline label - visible with data', 'Category': 'inline label - visible with data', 'Sub-Catego': 'inline label - visible with data', 'Quantity': 'inline label - visible with data', 'GCR Code': 'inline label - visible with data', 'GCR Descrp': 'inline label - visible with data', 'Year Const': 'inline label - visible with data', 'Address': 'inline label - visible with data', 'Pole #': 'inline label - visible with data', 'Alarm #': 'inline label - visible with data', });
lyr_Roadway_5.set('fieldLabels', {'PROVIDER': 'inline label - visible with data', 'ROADCLASS': 'inline label - visible with data', 'NBRLANES': 'inline label - visible with data', 'PAVSTATUS': 'inline label - visible with data', 'PAVSURF': 'inline label - visible with data', 'UNPAVSURF': 'inline label - visible with data', 'L_PLACENAM': 'inline label - visible with data', 'R_PLACENAM': 'inline label - visible with data', 'ROADJURIS': 'inline label - visible with data', 'TRAFFICDIR': 'inline label - visible with data', 'type': 'inline label - visible with data', 'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_Pipelines_6.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'LICENCE_NO': 'inline label - visible with data', 'IS_NEB': 'inline label - visible with data', 'LINE_NO': 'inline label - visible with data', 'LIC_LI_NO': 'inline label - visible with data', 'PLLICSEGID': 'inline label - visible with data', 'COMP_NAME': 'inline label - visible with data', 'BA_CODE': 'inline label - visible with data', 'PL_SPEC_ID': 'inline label - visible with data', 'SEG_LENGTH': 'inline label - visible with data', 'SEG_STATUS': 'inline label - visible with data', 'FROM_FAC': 'inline label - visible with data', 'FROM_LOC': 'inline label - visible with data', 'TO_FAC': 'inline label - visible with data', 'TO_LOC': 'inline label - visible with data', 'H2S_R_VOLM': 'inline label - visible with data', 'H2S_R_LEVL': 'inline label - visible with data', 'H2S_CONT': 'inline label - visible with data', 'PIPTECHSTD': 'inline label - visible with data', 'OUT_DIAMET': 'inline label - visible with data', 'WALL_THICK': 'inline label - visible with data', 'PIPE_TYPE': 'inline label - visible with data', 'PIPE_GRADE': 'inline label - visible with data', 'PIP_MATERL': 'inline label - visible with data', 'PIPE_MAOP': 'inline label - visible with data', 'BIDIRE_IND': 'inline label - visible with data', 'HDD_IND': 'inline label - visible with data', 'LINER_GRD': 'inline label - visible with data', 'LINER_TYPE': 'inline label - visible with data', 'EXT_COAT': 'inline label - visible with data', 'PIPE_ENVIR': 'inline label - visible with data', 'CLASS_LOC': 'inline label - visible with data', 'STRESSLEVL': 'inline label - visible with data', 'JOINTMETHD': 'inline label - visible with data', 'INT_COAT': 'inline label - visible with data', 'FLD_CTR_NM': 'inline label - visible with data', 'SUBSTANCE1': 'inline label - visible with data', 'SUBSTANCE2': 'inline label - visible with data', 'SUBSTANCE3': 'inline label - visible with data', 'ORIG_LICNO': 'inline label - visible with data', 'ORIGPSPPID': 'inline label - visible with data', 'ORIGLIN_NO': 'inline label - visible with data', 'LICAPPDATE': 'inline label - visible with data', 'ORG_ISSUED': 'inline label - visible with data', 'PERMT_APPR': 'inline label - visible with data', 'PERMT_EXPI': 'inline label - visible with data', 'LAST_OCCYR': 'inline label - visible with data', 'TEMPSURFPL': 'inline label - visible with data', 'GEOM_SRCE': 'inline label - visible with data', 'SHAPE_LEN': 'inline label - visible with data', });
lyr_Driveways_7.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type_2': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Width_2': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', 'n': 'inline label - visible with data', 'id': 'inline label - visible with data', 'Name': 'inline label - visible with data', 'Width': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'path': 'inline label - visible with data', });
lyr_WaterValve_8.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_TrafficSignage_9.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Size': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_SepticTank_10.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_SewerManhole_11.set('fieldLabels', {'Points': 'inline label - visible with data', 'Points_1': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Proper Cov': 'inline label - visible with data', 'Size': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_Streetlight_12.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Foundation': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_PowerlinePoles_13.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Attachment': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_PetroleumWells_14.set('fieldLabels', {'OBJECTID': 'inline label - visible with data', 'feature_id': 'inline label - visible with data', 'md_tempora': 'inline label - visible with data', 'md_tempo_1': 'inline label - visible with data', 'md_horiz_p': 'inline label - visible with data', 'md_horiz_1': 'inline label - visible with data', 'map_select': 'inline label - visible with data', });
lyr_FireHydrant_15.set('fieldLabels', {'Points': 'inline label - visible with data', 'Points_1': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Colour': 'inline label - visible with data', 'Height': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_GasMeters_16.set('fieldLabels', {'Points': 'inline label - visible with data', 'Points_1': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Size': 'inline label - visible with data', 'Model': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_Culvert_17.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Type_1': 'inline label - visible with data', 'Length': 'inline label - visible with data', 'Diameter': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_Cistern_18.set('fieldLabels', {'Collection': 'inline label - visible with data', 'Points': 'inline label - visible with data', 'Type': 'inline label - visible with data', 'Point Type': 'inline label - visible with data', 'Project Fe': 'inline label - visible with data', 'Created On': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Lng': 'inline label - visible with data', 'Image': 'inline label - visible with data', 'Capacity': 'inline label - visible with data', 'Usage': 'inline label - visible with data', 'Constructi': 'inline label - visible with data', 'Proper Cov': 'inline label - visible with data', 'Condition': 'inline label - visible with data', 'Conditio_1': 'inline label - visible with data', });
lyr_AbandonedWells_19.set('fieldLabels', {'Licence': 'inline label - visible with data', 'Licensee': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Lat': 'inline label - visible with data', 'Long': 'inline label - visible with data', 'Fluid': 'inline label - visible with data', 'SurfLoc': 'inline label - visible with data', 'LicenseeID': 'inline label - visible with data', 'Address1': 'inline label - visible with data', 'Address2': 'inline label - visible with data', 'City': 'inline label - visible with data', 'Province': 'inline label - visible with data', 'PostalCode': 'inline label - visible with data', 'Phone': 'inline label - visible with data', });
lyr_AbandonedWells_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});