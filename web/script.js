var map, info;
var extent = new OpenLayers.Bounds(-40.11214127659576434,-81.84792000000001622,109.17454127659576102,2.014320000000005);

function init() {

map = new OpenLayers.Map('map',{restrictedExtent:extent});

var flacons = new OpenLayers.Layer.WMS(

"Flacons",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'flacons', transparent:true}, {isBaseLayer:false, visibility:false}

);

var background = new OpenLayers.Layer.WMS(

"map",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'background,iles', transparent:true}, {isBaseLayer:true}

);

/*var equipements = new OpenLayers.Layer.WMS(

"Equipements",

"http://192.168.56.101/?map=/map/worldofzelda/map.map",

{layers: 'equipement', transparent:true}, {isBaseLayer:false}

);*/

var amespectres = new OpenLayers.Layer.WMS(

"&Acirc;mes de spectres",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'spectres', transparent:true}, {isBaseLayer:false, visibility:false}

);

var fragmentscoeur = new OpenLayers.Layer.WMS(

"Fragments de c&oelig;ur",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'fragmentscoeur', transparent:true}, {isBaseLayer:false, visibility:false}

);

var temples = new OpenLayers.Layer.WMS(

"Temples",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'temples', transparent:true}, {isBaseLayer:false, visibility:false}

);

var eaux = new OpenLayers.Layer.WMS(

"Rivi&egrave;res",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'rivers', transparent:true}, {isBaseLayer:false, visibility:false}

);

var equipement = new OpenLayers.Layer.WMS(

"&Eacute;quipements",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'equipement', transparent:true}, {isBaseLayer:false, visibility:false}

);

var places = new OpenLayers.Layer.WMS(

"Lieux cl&eacute;s",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'places', transparent:true}, {isBaseLayer:false, visibility:false}

);

var snowpeak = new OpenLayers.Layer.WMS(

"Pics des Glaces",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'snowpeak', transparent:true}, {isBaseLayer:false, visibility:false}

);

var firone = new OpenLayers.Layer.WMS(

"Plaine de Firone",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'firone', transparent:true}, {isBaseLayer:false, visibility:false}

);

var lanayru = new OpenLayers.Layer.WMS(

"Province de Lanayru",

"http://mapserver.esipe.geonef.fr/zelda/map",

{layers: 'lanayru', transparent:true}, {isBaseLayer:false, visibility:false}

);

    map.addLayers([background,eaux,flacons,amespectres,fragmentscoeur,temples,equipement,places,snowpeak,firone,lanayru]);
    
    info = new OpenLayers.Control.WMSGetFeatureInfo({
            url: 'http://mapserver.esipe.goenef.fr/zelda/map', 
            title: 'Identify features by clicking',
            layers: [equipement],
            queryVisible: true,
            eventListeners: {
                getfeatureinfo: function(event) {
                    map.addPopup(new OpenLayers.Popup.FramedCloud(
                        "chicken", 
                        map.getLonLatFromPixel(event.xy),
                        null,
                        event.text,
                        null,
                        true
                    ));
                }
            }
        });
        map.addControl(info);
        info.activate();
    
    map.zoomToExtent(extent, true);
    map.addControl(new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('div-main')}));
}


