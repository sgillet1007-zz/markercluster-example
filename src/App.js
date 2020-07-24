import React from "react";
import L from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "./App.css";
import coffee from "./coffee.png";

const coffeeShopIcon = L.icon({ iconUrl: coffee, iconSize: [20, 15] });
const createClusterCustomIcon = (cluster) => {
  const count = cluster.getChildCount();
  let size = "LargeXL";
  if (count < 10) {
    size = "Small";
  } else if (count >= 10 && count < 100) {
    size = "Medium";
  } else if (count >= 100 && count < 500) {
    size = "Large";
  }
  const options = {
    cluster: `markerCluster${size}`,
  };
  return L.divIcon({
    html: `<div>
        <span class="markerClusterLabel">${count}</span>
      </div>`,
    className: `${options.cluster}`,
  });
};
const coffeeshops = [
  { name: "Little Owl Coffee", lat: "39.750524", lng: "-104.999697" },
  { name: "Starbuck's Coffee", lat: "39.747018", lng: "-104.994819" },
  { name: "Huckleberry Roasters", lat: "39.753534", lng: "-104.996744" },
  { name: "Starbuck's Coffee", lat: "39.748378", lng: "-104.997048" },
  { name: "ink Coffee", lat: "39.749111", lng: "-104.996285" },
  { name: "Pigtrain Coffee", lat: "39.752962", lng: "-105.000258" },
  { name: "ink! Coffee Cadence", lat: "39.754233", lng: "-105.001992" },
  { name: "Capitol One Café", lat: "39.752911", lng: "-105.002517" },
  { name: "Kaffee Landskap", lat: "39.754090", lng: "-105.000924" },
  { name: "WFM Coffee Bar", lat: "39.754703", lng: "-105.001233" },
  { name: "Dazbog Coffee", lat: "39.742753", lng: "-104.993317" },
  { name: "Perks Coffee", lat: "39.743383", lng: "-104.993530" },
  { name: "Einstein Bagels", lat: "39.745046", lng: "-104.991702" },
  { name: "Novo Coffee", lat: "39.749167", lng: "-104.989775" },
  { name: "ink Coffee", lat: "39.745792", lng: "-104.989919" },
  { name: "Starbuck's Coffee", lat: "39.748781", lng: "-104.991404" },
];

const App = () => (
  <div id="map">
    <Map center={[39.747859, -104.995695]} zoom={14}>
      <TileLayer
        url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup
        iconCreateFunction={createClusterCustomIcon}
        showCoverageOnHover={null}
      >
        {coffeeshops.map((shop) => (
          <Marker
            position={[shop.lat, shop.lng]}
            icon={coffeeShopIcon}
            key={`${shop.name}${shop.lng}`}
          >
            <Popup>{shop.name}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </Map>
  </div>
);

export default App;
