'use strict';

function rasterTileStyle(tiles, tileSize) {
  return {
    version: 8,
    name: 'Generic raster source style',
    sources: {
      'raster-source': {
        type: 'raster',
        tileSize: tileSize || 256,
        scheme: 'xyz',
        tilejson: '2.0.0',
        tiles: tiles
      }
    },
    layers: [
      {
        id: 'raster-tile-layer',
        type: 'raster',
        source: 'raster-source',
        'source-layer': 'raster_full',
        paint: {
          'raster-opacity': 1
        }
      }
    ]
  };
}

module.exports = rasterTileStyle;
