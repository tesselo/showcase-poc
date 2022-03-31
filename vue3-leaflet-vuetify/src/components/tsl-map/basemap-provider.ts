const basemapProviders: {url: string, slug: string, name: string, attribution: string, type: string}[] = [
  {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
    slug: 'ESRIWorldImagery',
    name: 'ESRI World Imagery',
    attribution: '',
    type: 'RGB'
  },
  {
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    slug: 'OpenStreetMap',
    name: 'OpenStreetMap',
    attribution: '',
    type: 'NDVI',
  }
];

export default basemapProviders;
