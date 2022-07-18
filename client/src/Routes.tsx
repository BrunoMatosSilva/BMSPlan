import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Members } from './pages/Members'
import { Messeges } from './pages/Messeges'
import { Signup } from './pages/Signup'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/messeges" element={<Messeges />} />
      </Route>
    </Routes>
  )
}
