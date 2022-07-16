import { LoginContainer, LoginWrapper, SignupLink } from './styles'

export function Login() {
  return (
    <LoginContainer>
      <header>Organize seus Projetos</header>
      <span>Faça login!</span>
      <LoginWrapper>
        <form>
          <div>
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder="Digite seu usuario" />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua Senha" />
          </div>
        </form>
        <SignupLink>
          <p>Não possui Cadastro?</p>
          <a href="/signup">Crie Aqui!</a>
        </SignupLink>
      </LoginWrapper>
    </LoginContainer>
  )
}
