import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from '../../styles/TrackPage.module.css'

const TrackPage = () => {
    const { id } = useParams();
    const [track, setTrack] = useState({ results: [] });

  return (
    <div>TrackPage</div>
  )
}

export default TrackPage