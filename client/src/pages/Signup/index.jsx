import {
  BannerContainer,
  LoginLink,
  LogoWrapper,
  SignupContainer,
  SignupHeader,
  SignupWrapper,
} from './styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import ImgLogo from '../../assets/logo.png'
import ImgBanner from '../../assets/banner.png'
import { useTheme } from '../../hooks/useTheme'
import { Moon, Sun } from 'phosphor-react'
import { Link, useNavigate } from 'react-router-dom'
import authApi from '../../api/authApi'

const schema = yup
  .object({
    username: yup.string().required('Usuario é obrigatorio').min(8,'Usuario deve ter no minimo 8 caracters' ),
    password: yup.string().required('Senha é obrigatoria').min(8,'A senha deve ter no minimo 8 caracters' ),
    confirmPassword: yup.string().required('Senha é obrigatoria').oneOf([yup.ref('password'), null], 'Senhas não são iguais'),
  })
  .required()

export function Signup() {
  const navigate = useNavigate()

  const { currentTheme, setCurrentTheme } = useTheme()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

 async function onSubmit(data) {

    const username = data.username
    const password = data.password
    const confirmPassword = data.confirmPassword
    console.log(username, password, confirmPassword)

    const res = await authApi.signup({
      username, password, confirmPassword
    })
    setLoading(false)
    localStorage.setItem('token', res.token)

    
    navigate('/login')
  }

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
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    id="username"
                    type="text"
                    placeholder="Digite seu Usuario"
                    {...register('username')}
                  />
                  <span>{errors.username?.message}</span>
                </div>
                <div>
                  <input
                    id="password"
                    type="password"
                    placeholder="Digite sua Senha"
                    {...register('password')}
                  />
                  <span>{errors.password?.message}</span>
                </div>
                <div>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirmar Senha"
                    {...register('confirmPassword')}
                  />
                  <span>{errors.confirmPassword?.message}</span>
                </div>
                <button type="submit">Cadastrar conta</button>
              </form>

              <LoginLink>
                <p>Já possui uma conta?</p>
                <Link to="/login">Para Logar clique aqui</Link>
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
