# raster-tile-style

Helper function for creating [MapboxGL](https://github.com/mapbox/mapbox-gl-js)
[styles](https://www.mapbox.com/mapbox-gl-style-spec/) for serving raster tiles.

## Installation

    npm install raster-tile-style

## Usage

```js
var rasterTileStyle = require('raster-tile-style');
var style = rasterTileStyle(['https://example.com/{z}/{x}/{y}.png']);
```

The default tile size is `256` but you can override it using the second 
parameter.

```js
var style = rasterTileStyle(['https://example.com/{z}/{x}/{y}.png'], 512);
```

## See also

1. [MapboxGL-js style spec](https://www.mapbox.com/mapbox-gl-style-spec/)
2. [react-map-gl](github.com/uber/react-map-gl)
