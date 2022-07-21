import { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Loading } from '../../components/Loading'
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
