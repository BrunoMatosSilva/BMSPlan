import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-left: 1rem;
  padding-right: 1rem;
  > section {
    width: 15rem;
    border-right: 1px solid ${({ theme }) => theme.border};
    > img {
      height: 1.5rem;
      width: 1.5rem;
    }
  }
`
export const InputWrapper = styled.div`
  display: flex;
  padding-right: 50rem;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
`

export const InputContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundCard};
  border: none;
  padding: 0.3rem 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.3rem;
  gap: 0.8rem;
  transition: 0.4s;

  svg {
    width: 1.2rem;
    height: 1.2rem;
    transition: 0.4s;
    color: ${({ theme }) => theme.primary};
  }
  input {
    flex: 1;
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    input:-internal-autofill-selected {
      background: none;
    }
    &::placeholder {
      color: ${({ theme }) => theme.primary};
    }
    &:focus {
      outline: none;
    }
  }
`
