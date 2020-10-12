import React from 'react'

import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'

import mapMarkerimg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

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

      <div></div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="white" />
      </Link>
    </div>
  )
}

export default OrphanagesMap