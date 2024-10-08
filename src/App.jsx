import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Map from './pages/Map'
import List from './pages/List'
import { useDispatch } from 'react-redux';
import { getFlights } from './redux/actions';
import Modal from './components/Modal';


function App() {


  const [isMapView, setIsMapView] = useState(true);
  const [detailId, setDetailId] = useState(null);


  const dispatch = useDispatch();

  //ucuslari getirir
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


      {isMapView ? <Map setDetailId={setDetailId} /> : <List
        setDetailId={setDetailId} />}
      {detailId && <Modal detailId={detailId} close={() => setDetailId(null)} />}
    </div>
  )
}

export default App
