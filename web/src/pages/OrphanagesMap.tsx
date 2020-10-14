import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlus } from 'react-icons/fi'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

import mapMarkerimg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'
import mapIcon from '../utils/mapIcon'
import api from '../services/api'

interface Orphanage {
  id: number,
  name: string,
  latitude: number,
  longitude: number,
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([])

  async function getOrphanages() {
    const response = await api.get('orphanages')

    const orphanages: Orphanage[] = response.data

    setOrphanages(orphanages)
  }
  
  useEffect(() => {
    getOrphanages()
  }, [])

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

        {orphanages?.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude,orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`orphanages/${orphanage.id}`}>
                <FiArrowRight size={20} color="white" />
              </Link>
            </Popup>
          </Marker>
        ))}
      </Map>

      <Link to="orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  )
}

export default OrphanagesMap