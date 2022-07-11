import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Members } from './pages/Members'
import { Settings } from './pages/Settings'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members/>} />
        <Route path="/settings" element={<Settings/>} />
      </Route>
    </Routes>
  )
}