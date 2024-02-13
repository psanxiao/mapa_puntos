//CAPA BASE
var tileLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})

//ESTILO CAPA DE PUNTOS
var pointStyle = new ol.style.Style({
  image: new ol.style.Circle({
      radius: 10,
      fill: new ol.style.Fill({
          color: 'red'
      }),
      stroke: new ol.style.Stroke({
        color: '#333',
        width: 2
      })
  })
})

function functionStyle(feature, resolution){
  var fillColor = feature.get('fill-color');
  var strokeColor = feature.get('border-color');
  var thisStyle= new ol.style.Style({
    image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({
            color: fillColor
        }),
        stroke: new ol.style.Stroke({
          color: strokeColor,
          width: 2
        })
      })
    })
  return thisStyle;
 }
//CAPA DE PUNTOS
var vectorSource = new ol.source.Vector({
    features: (new ol.format.GeoJSON({featureProjection:"EPSG:3857"})).readFeatures(datosGeoJSON)    
}); 

var vectorPoints = new ol.layer.Vector({
    source: vectorSource,
    style: functionStyle
});

//DEFINIMOS UNA INTERACCIÓN
var selectInteraction = new ol.interaction.Select({
  condition: ol.events.condition.singleClick,
  layers: [vectorPoints],
});

//DEFINIMOS UN ELEMENTO OVERLAY
var popup = new ol.Overlay({
  element: document.getElementById('popup')
});

//OVERVIEWMAP OPTIONS
var overviewoptions = {
   //Definimos la clase para asignar un estilo concreto al objeto
   className: 'ol-overviewmap ol-custom-overviewmap',

   //Capas que se mostrarán en el OverviewMap
   //Mantenemos la misma capa del mapa aunque podría ser distinta
   layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM({
        })
      })
    ],

  //Oculto por defecto
  collapsed: false,

  //ToolTip
  tipLabel: 'Mapa de referencia'
}


//MAPA
map = new ol.Map({
  target: 'map'
  ,
  view: new ol.View({
    center: [312807, 5156486],
    zoom: 6
  })
  ,
  layers: [
    tileLayer, vectorPoints
  ],
  interactions: ol.interaction.defaults.defaults().extend([selectInteraction]),
  overlays: [popup],
  controls: ol.control.defaults.defaults().extend([
      new ol.control.OverviewMap(overviewoptions)
  ])
});


//COMPORTAMIENTO DE LA INTERACCIÓN
selectInteraction.on('select', function(browserevent) {
  var coordinate = browserevent.mapBrowserEvent.coordinate;
  var feature = browserevent.target.getFeatures().getArray()[0];
  //Si se ha seleccionado una entidad
  if (feature) {
    var content = document.getElementById('popup');
    var info = '<center><h1>'+feature.get('nombre')+'</h1></center>';

    //Insertamos las coordenadas en el objeto popup
    popup.setPosition(coordinate);
    content.innerHTML = info;
  }

  //Si se ha des-seleccionado una entidad
  else {
    //Insertamos unas coordenadas undefined para que no aparezca en pantalla
    popup.setPosition(undefined);
  }
});

