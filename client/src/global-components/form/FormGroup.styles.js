import styled from 'styled-components';

const FormGroup = styled.div`
  width: 100%;
  & > * { width: 100%; }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

export default FormGroup;
