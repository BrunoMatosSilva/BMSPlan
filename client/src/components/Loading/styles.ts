import styled from 'styled-components'

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 1.5rem;
  height: 1.5rem;

  svg {
    width: 1rem;
    height: 1rem;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
