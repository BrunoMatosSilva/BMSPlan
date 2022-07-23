import { ChatCentered, PlusCircle, SquaresFour, Users } from 'phosphor-react'
import boardApi  from '../../api/boardApi'
import { setBoards } from '../../redux/features/boardSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  SidebarContainer,
  ProjetosTitleContainer,
  ProjetosWrapper,
  FavoritoWrapper,
} from './styles'
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

export function Sidebar() {
  const boards = useSelector((state) => state.board.value)
  const navigate = useNavigate()
  const {boardId} = useParams()
  const dispatch = useDispatch()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
  const getBoards = async () => {
    try{
      const res = await boardApi.getAll()
      dispatch(setBoards(res))
    }catch(err){
      alert(err)
    }
  }
  getBoards()
  },[dispatch])

  useEffect(() => {
    const activeItem = boards.findIndex(e => e.id === boardId)
    if(boards.length > 0 && boardId === undefined){
      navigate(`/boards/${boards[0].id}`)
    }
    setActiveIndex(activeItem)
  },[boards, boardId, navigate])

  const onDragEnd = async({source, destination}) => {
    const newList = [...boards]
    const [removed] = newList.splice(source.index, 1)
    newList.splice(destination.index, 0, removed)

    const activeItem = newList.findIndex(e => e.id === boardId)
    setActiveIndex(activeItem)
    dispatch(setBoards(newList))

    try{
      await boardApi.updatePosition({boards: newList})
    }catch(err){
      alert(err)
    }
  }

  const addBoard = async () => {
    try {
      const res = await boardApi.create()
      const newList = [res, ...boards]
      dispatch(setBoards(newList))
      navigate(`/boards/${res.id}`)
    } catch (err) {
      alert(err)
    }
  }

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
          <PlusCircle size={15} onClick={addBoard} />
        </header>
        <ProjetosWrapper>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable key={'list-board-droppable-key'} droppableId={'list-board-droppable'}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {
                    boards.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                        <li>
                          <Link
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          to={`/boards/${item.id}`}
                          sx={{
                            cursor: snapshot.isDragging ? 'grab' : 'pointer!important'
                          }}
                          >
                            <div>
                              <section>
                              <span>{item.icon}</span>
                              <p>{item.title}</p>
                              </section>
                              <section>
                              <span>...</span>
                              </section>
                            </div> 
                          </Link>
                        </li>
                        )}
                      </Draggable>
                    ))
                  }
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
          
        </ProjetosWrapper>
      </ProjetosTitleContainer>
    </SidebarContainer>
  )
}
