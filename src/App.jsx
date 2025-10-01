import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import NotFound from './Not_Found_page'
import MainDashboard from './components/MainDashboard'
import SelectSubject from './components/SelectSubject'
import Subject from './components/Subject'
import PdfFile from './components/PdfFile'
import VideoFile from './components/VideoFile'
import About from './About'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/start" element={<MainDashboard />} />
        <Route path='/ministry' element={<SelectSubject />} />
        <Route path='/subject/:subject' element={<Subject />} />
        <Route path='/subject/:subject/pdf' element={<PdfFile />} />
        <Route path='/subject/:subject/video' element={<VideoFile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App