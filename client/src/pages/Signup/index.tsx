import {
  BannerContainer,
  LogoContainer,
  LogoWrapper,
  SignupContainer,
  SignupHeader,
  SignupWrapper,
} from './styles'
import ImgLogo from '../../assets/logo.png'
import ImgBanner from '../../assets/banner.png'

export function Signup() {
  return (
    <SignupContainer>
      <SignupHeader>
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
