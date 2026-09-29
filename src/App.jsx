import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import BuildBox from './pages/BuildBox.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<BuildBox />} />
      </Routes>
      <WhatsAppButton />
    </>
  )
}
