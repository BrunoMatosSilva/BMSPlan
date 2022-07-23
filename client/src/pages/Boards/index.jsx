import { Star, Trash } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import toast from "react-hot-toast";
import { BoardContainer, BoardHeader, BoardTitle, SubtitleBoard } from './styles'
import boardApi from '../../api/boardApi';

export function Boards() {
  const { boardId } = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [sections, setSections] = useState([])
  const [isFavourite, setIsFavourite] = useState(false)
  const [icon, setIcon] = useState('')

  useEffect(() => {
    async function getBoard(){
      try {
        const res = await boardApi.getOne(boardId)
        setTitle(res.title)
        setDescription(res.description)
        setSections(res.sections)
        setIsFavourite(res.favourites)
        setIcon(res.icon)
      }catch(err) {
        toast.error((err) => `Projeto não encontrado`)
      }
    }
    getBoard()
  },[boardId])

  return (
    <BoardContainer>
      <BoardHeader>
        <BoardTitle>
          <div className='title'>
            <span>{icon}</span>
            <input type="text" value={title} />
          </div>
          
          <div className='favorites'>
            {isFavourite ? (
              <Star color='hotyellow'  />
            ): (
              <Star  />
            )}
            
            <Trash />
          </div>
        </BoardTitle>
        
        <SubtitleBoard>
          <div className='subtitle'>
            <textarea type='text' value={description} />
          </div>
        </SubtitleBoard>
      </BoardHeader>
    </BoardContainer>
  )
}
