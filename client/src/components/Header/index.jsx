import { useTheme } from '../../hooks/useTheme'
import { useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
  MagnifyingGlass,
  Moon,
  SignOut,
  Sun,
} from 'phosphor-react'

export function Header() {
  const user = useSelector((state) => state.user.value)
  const navigate = useNavigate()
  const { currentTheme, setCurrentTheme } = useTheme()

  function handleSignOut(){
    localStorage.removeItem('token')
    navigate('/login')
  }

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
        <span>{user.name}</span>
        <button onClick={handleSignOut}>
          <SignOut size={20} />
        </button>
      </PerfilWrapper>
    </HeaderContainer>
  )
}
