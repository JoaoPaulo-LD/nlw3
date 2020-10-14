import React from 'react'

import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Leaflet from 'leaflet'

import 'leaflet/dist/leaflet.css'

import mapMarkerimg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerimg,

  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2]
})

const OrphanagesMap: React.FC = () => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerimg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita {':)'}</p>
        </header>

        <footer>
          <strong>Santarém</strong>
          <p>Pará</p>
        </footer>
      </aside>

      <Map
        center={[-2.4384375,-54.7176032]}
        zoom={15.12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={
            `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`
          }
        />

        <Marker
          icon={mapIcon}
          position={[-2.4384375,-54.7176032]}
        >
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="orphanages/1">
              <FiArrowRight size={20} color="white" />
            </Link>
          </Popup>
        </Marker>
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  )
}

export default OrphanagesMap