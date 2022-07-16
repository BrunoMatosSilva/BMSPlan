import { useTheme } from '../../hooks/useTheme'
import {
  HeaderContainer,
  LogoWrapper,
  InputContainer,
  InputWrapper,
  PerfilWrapper,
} from './styles'
import ImgLogo from './../../assets/logo.png'
import {
  Bell,
  CaretDoubleLeft,
  CaretDown,
  MagnifyingGlass,
  Moon,
  Sun,
} from 'phosphor-react'

export function Header() {
  const { currentTheme, setCurrentTheme } = useTheme()

  return (
    <HeaderContainer>
      <LogoWrapper>
        <section>
          <img src={ImgLogo} alt="" />
          <h2>Bms Plan</h2>
        </section>
        <CaretDoubleLeft size={18} />
      </LogoWrapper>
      <div>
        <InputWrapper>
          <InputContainer>
            <button>
              <MagnifyingGlass />
            </button>
            <input id="search" placeholder="procure alguma coisa..." />
          </InputContainer>
        </InputWrapper>
      </div>
      <PerfilWrapper>
        <section>
          {currentTheme === 'light' ? (
            <div>
              <Moon size={20} onClick={() => setCurrentTheme('dark')} />
            </div>
          ) : (
            <div>
              <Sun size={20} onClick={() => setCurrentTheme('light')} />
            </div>
          )}
          <Bell size={20} />
        </section>
        <span>Bruno Matos</span>
        <CaretDown size={20} />
      </PerfilWrapper>
    </HeaderContainer>
  )
}
