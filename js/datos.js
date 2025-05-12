var datosGeoJSON = {
"type": "FeatureCollection",
"name": "puntos",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
  //LOCALIZACIÓN DEL SIGTE-UdG
  {
    "type": "Feature",
    "properties": {
      "nombre": "SIGTE", //NOMBRE QUE SE MOSTRARÁ EN FORMA DE POP-UP
      "border-color": "#c3a3a3", //COLOR DEL BORDE
      "fill-color": "green" //COLOR DE RELLENO
    },
    "geometry": { 
      "type": "Point", "coordinates": [
        2.827676362232693, 41.98521580774775
      ]
    }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Pablo Sanxiao",
      "border-color": "#f300a3",
      "fill-color": "red" 
    },
    "geometry": { //OLEIROS
        "type": "Point",
        "coordinates": [
          -8.317165,
          43.333208
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Miguel González Oubiña",
      "border-color": "#00bfff",
      "fill-color": "#0c7892" 
    },
    "geometry": { //BREMEN
        "type": "Point",
        "coordinates": [
          8.8177382,
          53.1013963 
        ]
      }
  }
  ,
  {
    "type": "Feature",
    "properties": {
      "nombre": "Natalia Barrientos",
      "border-color": "#663300",
      "fill-color": "#ff9900" 
    },
    "geometry": { //PALMA
        "type": "Point",
        "coordinates": [
          2.6535382,
          39.576335 
        ]
      }
  }
 
]
}
