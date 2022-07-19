import {
  BannerContainer,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LogoWrapper,
  SignupLink,
} from './styles'
import ImgLogo from '../../assets/logo.png'
import ImgBanner from '../../assets/banner.png'
import { useTheme } from '../../hooks/useTheme'
import { Moon, Sun } from 'phosphor-react'

export function Login() {
  const { currentTheme, setCurrentTheme } = useTheme()

  return (
    <LoginContainer>
      <LoginHeader>
        <LogoWrapper>
          <header>
            <div>
              <img src={ImgLogo} alt="" />
              <h2>Bms Plan</h2>
            </div>
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
          </header>
          <div>
            <h3>
              Gerencie seus projetos e tarefas de uma forma{' '}
              <span>intuitiva</span> e <span>agradável</span>.
            </h3>
            <p>
              Utilizando a metodologia Kanban, cartões personalizados para
              facilitar a sua organização visual de tarefas e projetos.
            </p>
          </div>
        </LogoWrapper>
        <div>
          <LoginWrapper>
            <section>
              <h2>Acesse gratuitamente</h2>
              <form>
                <div>
                  <input type="text" placeholder="Digite seu Usuario" />
                </div>
                <div>
                  <input type="password" placeholder="Digite sua Senha" />
                </div>
                <button type="submit">Acessar o Sistema</button>
              </form>

              <SignupLink>
                <p>Não possui Cadastro?</p>
                <a href="/signup">Crie Aqui!</a>
              </SignupLink>
            </section>
          </LoginWrapper>
        </div>
      </LoginHeader>
      <BannerContainer>
        <img src={ImgBanner} alt="" />
      </BannerContainer>
    </LoginContainer>
  )
}
