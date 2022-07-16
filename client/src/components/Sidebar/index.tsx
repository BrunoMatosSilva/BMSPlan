import { GearSix, PlusCircle, SquaresFour, Users } from 'phosphor-react'
import {
  SidebarContainer,
  ProjetosTitleContainer,
  ProjetosWrapper,
} from './styles'

export function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <li>
          <SquaresFour size={20} />
          Home
        </li>
        <li>
          <Users size={20} />
          Membros
        </li>
        <li>
          <GearSix size={20} />
          Configuração
        </li>
      </ul>

      <ProjetosTitleContainer>
        <header>
          <h3>Seus Projetos</h3>
          <PlusCircle size={15} />
        </header>
        <ProjetosWrapper>
          <section>
            <button>
              <div>
                <span className="red">•</span>Mobile App
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span className="green">•</span>Website Redesign
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span className="orange">•</span>Design System
              </div>
              <span>...</span>
            </button>
            <button>
              <div>
                <span className="purple">•</span>Wireframe
              </div>
              <span>...</span>
            </button>
          </section>
        </ProjetosWrapper>
      </ProjetosTitleContainer>
    </SidebarContainer>
  )
}
