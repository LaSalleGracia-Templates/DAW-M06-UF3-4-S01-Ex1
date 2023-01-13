import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Saludo from './Saludo';

afterEach(cleanup);

test('El componente Saludo debe mostrar el mensaje "Bienvenido!"', () => {
    const { getByText } = render(<Saludo />);
    expect(getByText("Bienvenido!")).toBeInTheDocument();
});