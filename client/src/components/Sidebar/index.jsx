import { ChatCentered, PlusCircle, SquaresFour, Users } from 'phosphor-react'
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
          <a href="#">
            <SquaresFour size={20} />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <Users size={20} />
            Membros
          </a>
        </li>
        <li>
          <a href="#">
            <ChatCentered size={20} />
            Mensagens
          </a>
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
