import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Map from './pages/Map'
import List from './pages/List'
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';

function App() {

  const [isMapView, setIsMapView] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFlights());
  }, []);


  return (
    <div>
      <Header />

      <div className='buttons'>
        <button onClick={() => setIsMapView(true)} className={isMapView ? "active" : ""}>Harita Gorunumu</button>
        <button onClick={() => setIsMapView(false)} className={isMapView ? "" : "active"}>Liste Gorunumu</button>
      </div>


      {isMapView ? <Map /> : <List />}

    </div>
  )
}

export default App
