import {
  BannerContainer,
  LoginContainer,
  LoginHeader,
  LoginWrapper,
  LogoContainer,
  LogoWrapper,
  SignupLink,
} from './styles'
import ImgLogo from '../../assets/logo.png'
import ImgBanner from '../../assets/banner.png'

export function Login() {
  return (
    <LoginContainer>
      <LoginHeader>
        <LogoContainer>
          <LogoWrapper>
            <header>
              <img src={ImgLogo} alt="" />
              <h2>Bms Plan</h2>
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
        </LogoContainer>
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
