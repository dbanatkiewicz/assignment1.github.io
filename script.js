require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Sketch",
  "esri/layers/GraphicsLayer",
  "esri/widgets/Home"
], function (esriConfig, Map, MapView, Sketch, GraphicsLayer, Home) {
  const graphicsLayer = new GraphicsLayer();
  esriConfig.apiKey =
    "AAPK8d15272b62e34c3997c38c5333639e55oGaWOYmvvIfemUPm3MXLqUNqbpPrYGL_GgoeKansmDTG84JhytTkLTV8YHozP8t2";

  // Create basemap
  const map = new Map({
    basemap: "arcgis/topographic" // basemap style services,
  });

  // Create MapView
  const view = new MapView({
    container: "viewDiv", // Div Element
    map: map,
    center: [90, 45], // Long, Lat
    zoom: 5 // Zoom Level
  });

  // Create Sketch Widget
  view.when(() => {
    const sketch = new Sketch({
      layer: graphicsLayer,
      view: view,
      // graphics will be selected as soon as it is created
      creationMode: "update"
    });

    //Placement of Sketch Widget
    view.ui.add(sketch, "top-right");
  });
  const homeBtn = new Home({
    view: view
  });
  //Place Home widget at top left of map
  view.ui.add(homeBtn, "top-left");
});