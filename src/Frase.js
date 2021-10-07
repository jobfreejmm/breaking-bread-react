/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    /* margin-top: 20rem; */
    
    @media(min-width: 992px){
        margin-top: 20rem;
    }
    h1{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        /* background-color: aqua; */

        
        &::before{
            content: open-quote;
            font-size: 10rem;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.4rem;
        text-align: right;
        margin-top: 2rem;
        font-weight: bold;
        color: #666;
    }

`;
const Frase = ({ frase }) => {
  console.log(frase);
  if (Object.entries(frase).length === 0) return null;
  return (
    <Container>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </Container>
  );
};

export default Frase;
