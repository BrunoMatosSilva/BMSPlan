import { SignupContainer, SignupWrapper } from './styles'

export function Signup() {
  return (
    <SignupContainer>
      <h2>Faça seu Cadastro</h2>
      <SignupWrapper>
        <form>
          <div>
            <label htmlFor="">Usuario</label>
            <input type="text" placeholder="Digite seu usuario" />
          </div>
          <div>
            <label htmlFor="">Senha</label>
            <input type="password" placeholder="Digite sua Senha" />
          </div>
          <div>
            <label htmlFor="">Confirmar Senha</label>
            <input type="password" placeholder="Digite sua Senha" />
          </div>
        </form>
      </SignupWrapper>
    </SignupContainer>
  )
}
