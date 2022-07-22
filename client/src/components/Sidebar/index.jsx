import { ChatCentered, PlusCircle, SquaresFour, Users } from 'phosphor-react'
import { Link } from 'react-router-dom'
import {
  SidebarContainer,
  ProjetosTitleContainer,
  ProjetosWrapper,
  FavoritoWrapper,
} from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <Link to="/">
            <SquaresFour size={20} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/members">
            <Users size={20} />
            Membros
          </Link>
        </li>
        <li>
          <Link to="/messeges">
            <ChatCentered size={20} />
            Mensagens
          </Link>
        </li>
      </ul>
      <ProjetosTitleContainer>
        <header>
          <h3>Favoritos</h3>
        </header>
        <FavoritoWrapper>
          <section>
            <button>
              <div>
                <span>📄</span>Mobile App
              </div>
              <span>...</span>
            </button>
          </section>
        </FavoritoWrapper>
      </ProjetosTitleContainer>

      <ProjetosTitleContainer>
        <header>
          <h3>Seus Projetos</h3>
          <PlusCircle size={15} />
        </header>
        <ProjetosWrapper>
          <section>
            <button>
              <div>
                <span>📄</span>Mobile App
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span>📄</span>Website Redesign
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span>📄</span>Design System
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span>📄</span>Wireframe
              </div>
              <span>...</span>
            </button>
          </section>
        </ProjetosWrapper>
      </ProjetosTitleContainer>
    </SidebarContainer>
  )
}
