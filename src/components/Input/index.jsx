import { Container } from "./styles";

export function Input({ icon: Icon, onIconClick, ...rest }) {
  return (
    <Container>
      {Icon && <Icon onClick={onIconClick} />} 
      <input {...rest} />
    </Container>
  );
}


