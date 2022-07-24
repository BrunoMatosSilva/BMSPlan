import styled from 'styled-components'

export const BoardContainer = styled.div`
display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

export const BoardHeader = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;


`

export const BoardTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  
  align-items: center;
  
  .title {
    display: flex;
    align-items: center;

    span {
      font-size: 2rem;
    }
    input {
      font-size: 2rem;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
      border: none;
      background: transparent;

      &:focus {
        outline: none;
      }
    }
  }
   .favorites {
    display: flex;
    gap: 2rem;

    svg {
      font-size: 1.5rem;
      font-weight: bold;
      color: ${({ theme }) => theme.primary};
      cursor: pointer;
      transition: 0.2s all;

      &:hover {
        color: ${({ theme }) => theme.icon};
      }
    }
   }
`

export const SubtitleBoard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 1rem;

  .subtitle {
    display: flex;

    textarea {
      width: 20rem;
      height: 5rem;
      font-size: 0.85rem;
      border: none;
      color: ${({ theme }) => theme.primary};
      background: transparent;
      resize: none;
      overflow: hidden;
      
      &:focus {
        outline: none;
      }
    }
  }
`

export const AddBoardWrapper = styled.div`
width: 100%;
display: flex;
align-items: center;

  > section {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
        button {
          display: flex;
          align-items: center;
          padding: 0.5rem;
          border: none;
          border-radius: 10px;
          background: ${({ theme }) => theme.icon};
          color: ${({ theme }) => theme.border};
          gap: 0.75rem;
          transition: 0.2s all;

          &:hover {
            background: ${({theme}) => theme.textPriorityHight};
          }
        }
    }
  }
`
