import React from 'react';
import { Container } from './styles';

type TextTypeProps = {
    title: string
}

export function Title({title}: TextTypeProps) {
  return (
    <Container>
        {title}
    </Container>
  );
}