import { useEffect, useState } from 'react'
import './App.css'
import { Nav } from './components/navigation';
import { Head } from './components/header'
import jsonData from './data/data.json' ;
import { Team } from './components/team';
//export const smoothScroll = {}

const App = () => {
  const [landingPageData,setLandingPageData] = useState({});
  useEffect(()=>{
    setLandingPageData(jsonData);
  },[]);


  return (
    <div>
      <Nav />
      <Head />
      <Team data={landingPageData.Team} />
    </div>
  )
}

export default App;