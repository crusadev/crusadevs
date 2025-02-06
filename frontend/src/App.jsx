import { useState } from 'react'
import Navbar from './components/navbar'
import { Outlet } from 'react-router-dom'
import { faReact,faNode,faAngular,faPython } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faHelmetSafety,faRobot,faCodeBranch,faFire,faOilCan } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
function App() {
library.add(faReact,faNode,faAngular,faPython,faPhone,faHelmetSafety,faRobot,faCodeBranch,faFire,faOilCan)
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
