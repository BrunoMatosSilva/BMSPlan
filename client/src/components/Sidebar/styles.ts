import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: block;
  width: 16rem;
  height: calc(100vh - 4.3rem);
  border-right: 1px solid ${({ theme }) => theme.border};
  justify-content: space-between;

  ul {
    margin: 2rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    gap: 1.12rem;

    li {
      display: flex;
      align-items: center;
      font-size: 1rem;
      cursor: pointer;
      transition: 1s color;

      svg {
        margin-right: 1rem;
      }

      &:hover {
        color: ${({ theme }) => theme.icon};
      }
    }
  }
`

export const ProjetosTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
  gap: 2;
  border-top: 1px solid ${({ theme }) => theme.border};

  header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    h3 {
      font-size: 0.75rem;
      text-transform: uppercase;
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

export const ProjetosWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    button {
      display: flex;
      text-align: left;
      align-items: center;
      justify-content: space-between;
      border: none;
      border-radius: 0.37rem;
      padding-left: 0.5rem;
      padding-right: 0.25rem;
      padding-bottom: 0.25rem;
      cursor: grab;
      color: ${({ theme }) => theme.primary};
      background: none;
      font-size: 1rem;
      transition: 1s all;
      overflow: hidden;

      &:hover {
        color: ${({ theme }) => theme.secondery};
        background: rgb(153, 102, 255, 0.2);
      }
      span {
        font-size: 1.5rem;
        margin-right: 0.5rem;
      }
      .red {
        color: ${({ theme }) => theme.textPriorityHight};
      }
      .green {
        color: ${({ theme }) => theme.textPriorityMedium};
      }
      .orange {
        color: ${({ theme }) => theme.textPriorityLow};
      }
      .purple {
        color: ${({ theme }) => theme.icon};
      }
    }
  }
`
