import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding-left: 1rem;
  padding-right: 1rem;
`

export const LogoWrapper = styled.div`
  display: flex;
  width: 15rem;
  height: 4.2rem;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.border};
  > section {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      > img {
        height: 1.5rem;
        width: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.secondery};
      }
    }
  }
  svg {
    margin-left: 3rem;
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

  button {
    background: transparent;
    border: none;
    svg {
      width: 1.2rem;
      height: 1.2rem;
      transition: 0.4s;
      color: ${({ theme }) => theme.primary};
    }
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

export const PerfilWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }

  > button {
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.primary};
  }

  section {
    display: flex;
    margin-right: 2rem;
    gap: 1.2rem;

    button {
      border: none;
      background: transparent;
      color: ${({ theme }) => theme.primary};
    }

    svg {
      cursor: pointer;
      transition: 1s color;

      &:hover {
        color: ${({ theme }) => theme.icon};
      }
    }
  }
`
