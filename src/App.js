/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';
import Frase from './Frase';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: .5rem;
  /* background-color: aqua; */
  align-items: center;
  /* justify-content: flex-end; */
`;

const Button = styled.button`
   background: -webkit-linear-gradient(top left, #007d35 0%,#007d35 40%,#0f574e 100%);
   background-size: 300px;
   font-family:Arial, Helvetica, sans-serif;
   color: #fff;
   margin-top: 3rem;
   padding: 1rem 2rem;
   font-size: 2rem;
   border: 2px solid black;


`;

function App() {
  // state paraguardar la frase
  const [frases, setFrases] = React.useState({});

  const fetchApi = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    // const frase = api.then((res) => res.json()); Accedemos a la api
    // frase.then((res) => console.log(res));
    const frase = await api.json();
    setFrases(
      frase[0],
    );
  };
  // Cargar una frase
  React.useEffect(() => {
    fetchApi();
  }, []);
  return (
    <Container>
      <Frase frase={frases} />
      <Button onClick={fetchApi}>Obtener frase</Button>
    </Container>
  );
}

export default App;
