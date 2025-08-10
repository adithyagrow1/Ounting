import React from 'react'
import { Link } from 'react-router-dom'

export default function LocationCard({ id, title, city, short, image, rating }){
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" style={{height: '180px', objectFit:'cover'}} alt={title}/>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-muted">{city} · ⭐ {rating}</p>
        <p className="card-text">{short}</p>
        <div className="mt-auto">
          <Link to={'/'} className="btn btn-primary">Plan Visit</Link>
        </div>
      </div>
    </div>
  )
}
