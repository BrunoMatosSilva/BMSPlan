import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { LayoutContainer, LayoutGrid } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutGrid>
        <Sidebar />
        <Outlet />
      </LayoutGrid>
    </LayoutContainer>
  )
}
