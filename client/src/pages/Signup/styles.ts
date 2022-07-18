import styled from 'styled-components'

export const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(242, 242, 242);
  background: linear-gradient(
    180deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(219, 219, 219, 1) 48%,
    rgba(51, 51, 51, 1) 100%
  );
`

export const SignupHeader = styled.section`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
`

export const LogoContainer = styled.div``

export const LogoWrapper = styled.section`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  > header {
    display: flex;
    align-items: center;
    > img {
      height: 1.5rem;
      width: 1.5rem;
    }
    h2 {
      color: ${({ theme }) => theme.secondery};
    }
  }
  > div {
    margin-top: 2rem;
    h3 {
      font-size: 2rem;
      color: ${({ theme }) => theme.secondery};
      font-weight: 400;
      span {
        font-weight: bold;
        color: ${({ theme }) => theme.icon};
      }
    }
    p {
      margin-top: 1rem;
      line-height: 1.5rem;
    }
  }
`

export const SignupWrapper = styled.section`
  background-color: ${({ theme }) => theme.secondery};
  border: 1px solid ${({ theme }) => theme.icon};
  box-shadow: 5px 5px 17px -5px ${({ theme }) => theme.secondery};
  border-radius: 10px;

  > section {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    gap: 1rem;

    h2 {
      color: ${({ theme }) => theme.backgroundCard};
    }

    > form {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      > div {
        display: flex;
        width: 100%;
        input {
          width: 100%;
          height: 3rem;
          border-radius: 5px;
          padding-left: 1rem;
          font-size: 1rem;
          color: ${({ theme }) => theme.primary};
          background: ${({ theme }) => theme.background};

          ::placeholder {
            font-size: 1rem;
          }
        }
      }
      button {
        height: 3rem;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: bold;
        text-transform: uppercase;
        color: ${({ theme }) => theme.border};
        background: ${({ theme }) => theme.textPriorityMedium};
        transition: 0.8s all;

        &:hover {
          background: ${({ theme }) => theme.textPriorityHight};
        }
      }
    }
  }
`

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  img {
    width: 1110px;
    height: 700px;
    margin: 0 auto;
  }
`
