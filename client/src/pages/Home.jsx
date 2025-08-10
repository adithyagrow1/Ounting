import React from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div>
      <header className="p-4 rounded bg-gradient" style={{background: 'linear-gradient(135deg,#FF7A18,#AF002D)'}}>
        <div className="container text-white py-5">
          {/* Replace text with logo image */}
          <img 
            src="/images/outingo-logo.png" 
            alt="Outingo Logo" 
            style={{ maxWidth: '300px', height: 'auto', marginBottom: '1rem' }} 
          />
          <p className="lead">Your vibrant travel companion — discover places, plan quick trips, and book experiences.</p>
          <Link className="btn btn-light btn-lg" to="/explore">Explore Now</Link>
        </div>
      </header>

      <section className="my-5">
        <div className="container">
          <h3>Featured destinations</h3>
          <div className="row g-3 mt-3">
            <div className="col-md-4">
              <div className="card">
                <img src="/images/udaipur1.jpg" className="card-img-top" alt="Udaipur"/>
                <div className="card-body">
                  <h5 className="card-title">Shreemahal Fort</h5>
                  <p className="card-text">Sunset views and history.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/goa1.jpg" className="card-img-top" alt="Goa"/>
                <div className="card-body">
                  <h5 className="card-title">Blue Lagoon Beach</h5>
                  <p className="card-text">White sands and beach shacks.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="/images/manali1.jpg" className="card-img-top" alt="Manali"/>
                <div className="card-body">
                  <h5 className="card-title">Himalayan Valley Trail</h5>
                  <p className="card-text">Trek among the pines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
