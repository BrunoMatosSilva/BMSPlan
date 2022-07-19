import {
  BannerContainer,
  LoginLink,
  LogoWrapper,
  SignupContainer,
  SignupHeader,
  SignupWrapper,
} from './styles'
import ImgLogo from '../../assets/logo.png'
import ImgBanner from '../../assets/banner.png'
import { useTheme } from '../../hooks/useTheme'
import { Moon, Sun } from 'phosphor-react'

export function Signup() {
  const { currentTheme, setCurrentTheme } = useTheme()

  return (
    <SignupContainer>
      <SignupHeader>
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
          <SignupWrapper>
            <section>
              <h2>Criar seu acesso aqui</h2>
              <form>
                <div>
                  <input type="text" placeholder="Digite seu Usuario" />
                </div>
                <div>
                  <input type="password" placeholder="Digite sua Senha" />
                </div>
                <div>
                  <input type="password" placeholder="Confirmar Senha" />
                </div>
                <button type="submit">Cadastrar conta</button>
              </form>

              <LoginLink>
                <p>Já possui uma conta?</p>
                <a href="/login">Para Logar clique aqui</a>
              </LoginLink>
            </section>
          </SignupWrapper>
        </div>
      </SignupHeader>
      <BannerContainer>
        <img src={ImgBanner} alt="" />
      </BannerContainer>
    </SignupContainer>
  )
}
