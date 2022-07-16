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
          <a href="#">
            <img src={ImgLogo} alt="" />
            <h2>Bms Plan</h2>
          </a>
        </section>
        <CaretDoubleLeft size={18} />
      </LogoWrapper>
      <div>
        <InputWrapper>
          <InputContainer>
            <form>
              <button>
                <MagnifyingGlass />
              </button>
              <input id="search" placeholder="procure alguma coisa..." />
            </form>
          </InputContainer>
        </InputWrapper>
      </div>
      <PerfilWrapper>
        <section>
          {currentTheme === 'light' ? (
            <div>
              <button>
                <Moon size={20} onClick={() => setCurrentTheme('dark')} />
              </button>
            </div>
          ) : (
            <div>
              <button>
                <Sun size={20} onClick={() => setCurrentTheme('light')} />
              </button>
            </div>
          )}
          <button>
            <Bell size={20} />
          </button>
        </section>
        <span>Bruno Matos</span>
        <button>
          <CaretDown size={20} />
        </button>
      </PerfilWrapper>
    </HeaderContainer>
  )
}
