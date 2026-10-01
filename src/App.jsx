import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuildBox from './pages/BuildBox.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import Motion from './components/Motion.jsx'
import { BuildFab } from './components/BoxPreview.jsx'

export default function App() {
  return (
    <>
      <Motion />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<BuildBox />} />
      </Routes>
      <BuildFab />
      <WhatsAppButton />
    </>
  )
}
