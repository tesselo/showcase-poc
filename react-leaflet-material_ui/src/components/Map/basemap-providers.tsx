const basemapProviders: {url: string, slug: string, name: string, type: string}[] = [
    {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}.png",
      slug: 'ESRIWorldImagery',
      name: 'ESRI World Imagery',
      type: 'RGB'
    },
    {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      slug: 'OpenStreetMap',
      name: 'OpenStreetMap',
      type: 'NDVI',
    }
  ];
  
export default basemapProviders
