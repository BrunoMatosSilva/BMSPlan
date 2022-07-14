import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { useTheme } from './hooks/useTheme'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Members } from './pages/Members'
import { Settings } from './pages/Settings'
import { GlobalStyle } from './styles/global'
import { themes } from './styles/themes/default'

export function Router() {
  const {currentTheme} = useTheme()

  return (
    <ThemeProvider theme={themes[currentTheme]}>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members/>} />
        <Route path="/settings" element={<Settings/>} />
      </Route>
    </Routes>
    </ThemeProvider>
  )
}