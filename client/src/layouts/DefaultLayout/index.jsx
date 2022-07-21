import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
import { Sidebar } from '../../components/Sidebar'
import authUtils from '../../utils/authUtils'
import { LayoutContainer, LayoutGrid } from './styles'

export function DefaultLayout() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await authUtils.isAuthenticated()
      if (!isAuth) {
        navigate('/login')
      } else {
        setLoading(false)
      }
    }
    checkAuth()
  }, [navigate])

  return loading ? (
    <Loading />
  ) : (
    <LayoutContainer>
      <Header />
      <LayoutGrid>
        <Sidebar />
        <Outlet />
      </LayoutGrid>
    </LayoutContainer>
  )
}