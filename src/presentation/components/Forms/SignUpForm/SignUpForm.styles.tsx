import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: #ffffff;
  height: 75dvh;
  width: 30vw;
  -webkit-box-shadow: 10px 10px 24px #d5d5d5, -10px -10px 24px #d5d5d5;
  box-shadow: 10px 10px 24px #d5d5d5, -10px -10px 24px #d5d5d5;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    padding: 0.25rem;
    background: linear-gradient(
      315deg,
      var(--neutral-grey) 0%,
      var(--neutral-white) 52%,
      var(--neutral-grey) 100%
    );
    -webkit-mask: linear-gradient(var(--neutral-white) 0 0) content-box,
      linear-gradient(var(--neutral-white) 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem 0;
  width: 100%;
  margin: 1rem 0 0 0;

  > input {
    width: 100%;
    padding: 1rem 1.5rem;
    background: var(--neutral-grey);
    color: var(--black);
    border: none;
    border-radius: 0.5rem;
    outline: 0.0625rem solid var(--primary);
    &:hover {
      cursor: pointer;
    }
  }

  > button {
    margin-top: 1rem;
    padding: 0.6rem 2rem;
    border: none;
    border-radius: 0.5rem;
    background: var(--primary);
    font-weight: 700;
    color: var(--black);
    font-size: 1rem;
    letter-spacing: 0.5px;

    &:hover {
      cursor: pointer;
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 0.5rem 0;
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    margin-top: 1rem;
  }
`;

export const SignUpFormStyles = {
  Form,
  FormFields,
};
