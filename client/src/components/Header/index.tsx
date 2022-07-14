import { useCallback } from 'react'
import { useTheme } from '../../hooks/useTheme'
import { HeaderContainer, InputContainer, InputWrapper } from './styles'
import ImgLogo from './../../assets/logo.png'
import {
  Bell,
  CaretDoubleLeft,
  CaretDown,
  MagnifyingGlass,
  Moon,
} from 'phosphor-react'

export function Header() {
  const { currentTheme, setCurrentTheme } = useTheme()

  const getOppositeTheme = useCallback(
    () => (currentTheme === 'light' ? 'dark' : 'light'),
    [currentTheme],
  )

  return (
    <HeaderContainer>
      <section>
        <img src={ImgLogo} alt="" />
        <span>Bms Plan</span>
        <CaretDoubleLeft size={14} />
      </section>
      <div>
        <InputWrapper>
          <InputContainer>
            <MagnifyingGlass />
            <input id="search" placeholder="procure alguma coisa..." />
          </InputContainer>
        </InputWrapper>
      </div>
      <div>
        <button onClick={() => setCurrentTheme(getOppositeTheme())}>
          <Moon />
        </button>
        <Bell />
        <span>Bruno Matos</span>
        <CaretDown />
      </div>
    </HeaderContainer>
  )
}
