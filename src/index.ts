import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import { defaults as defaultControls } from 'ol/control';
import ScaleLine from 'ol/control/ScaleLine';
import vt from './layers/vt';

import { parseHash, setPermalink, setPopstate } from './utils/handleHash';

import 'ol/ol.css';

const { zoom, center } = parseHash(window);

const map = new Map({
  target: 'map',
  view: new View({
    center: center || fromLonLat([140.46, 36.37]),
    zoom: zoom || 15,
    enableRotation: false,
  }),
  layers: [vt],
  controls: defaultControls({
    attributionOptions: { collapsible: false },
  }).extend([new ScaleLine()]),
});

setPermalink(map);
setPopstate(map, window);
