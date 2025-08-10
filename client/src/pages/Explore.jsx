import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LocationCard from '../components/LocationCard'

export default function Explore() {
  const [query, setQuery] = useState('')
  const [locations, setLocations] = useState([])
  const [loading, setLoading] = useState(false)
  const [planningId, setPlanningId] = useState(null) // Track which location is being planned

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    axios
      .get('http://localhost:4000/api/locations', { params: { q: query }, signal: controller.signal })
      .then(r => setLocations(r.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [query])

  const handlePlanVisit = async (locationId) => {
    try {
      setPlanningId(locationId)
      await axios.post('http://localhost:4000/api/plan-visit', { id: locationId })
      alert('Visit planned successfully!')
    } catch (err) {
      console.error(err)
      alert('Failed to plan visit. Please try again.')
    } finally {
      setPlanningId(null)
    }
  }

  return (
    <div>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Search city or place..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="row g-3">
          {locations.map(l => (
            <div className="col-md-4" key={l.id}>
              <LocationCard {...l}>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => handlePlanVisit(l.id)}
                  disabled={planningId === l.id}
                >
                  {planningId === l.id ? 'Planning...' : 'Plan Visit'}
                </button>
              </LocationCard>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
