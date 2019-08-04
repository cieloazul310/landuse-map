import Map from 'ol/Map';
import { fromLonLat, toLonLat } from 'ol/proj';

type parseHashResult = {
  zoom: number | null;
  center: number[] | null;
};

export function parseHash(window: Window): parseHashResult {
  if (window.location.hash !== '') {
    // try to restore center, zoom-level and rotation from the URL
    const hash = window.location.hash.replace('#', '');
    const parts = hash.split('/');

    if (parts.length === 3) {
      const zoom = parseFloat(parts[0]);
      const center = fromLonLat([parseFloat(parts[1]), parseFloat(parts[2])]);

      return { zoom, center };
    } else {
      return { zoom: null, center: null };
    }
  }
  return { zoom: null, center: null };
}

export function setPermalink(map: Map) {
  map.on('moveend', () => {
    const view = map.getView();
    const zoom = view.getZoom();
    const center = toLonLat(view.getCenter());
    const hash =
      '#' +
      zoom.toFixed(2) +
      '/' +
      center[0].toFixed(4) +
      '/' +
      center[1].toFixed(4);
    const state = { zoom, center };
    window.history.pushState(state, 'map', hash);
  });
}

export function setPopstate(map: Map, window: Window) {
  window.addEventListener('popstate', event => {
    if (event.state === null) {
      return;
    }
    map.getView().setCenter(fromLonLat(event.state.center));
    map.getView().setZoom(event.state.zoom);
  });
}
