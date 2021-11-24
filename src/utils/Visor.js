import M from 'utils/Mapea';

export let mapjs;


/**
 * TODO
 */
export const initMap = () => {
  mapjs = M.map({
    container: 'mapjs', //id del contenedor del mapa
    controls: ['panzoom', 'scale*true', 'scaleline', 'rotate', 'location', 'backgroundlayers'],
    zoom: 5,
    maxZoom: 20,
    minZoom: 4,
    center: [-467062.8225, 4683459.6216],
  });
};

export const getLayersNames = () => mapjs.getLayers().map(l => l.name);

export const isLoadedMap = () => mapjs !== undefined;