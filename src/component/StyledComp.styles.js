import styled from 'styled-components';

export const StyledBtn = styled.button`
background-color: ${(props)=> (props.variant === 'outline'? 'white':'red')};
color: ${(props)=> (props.variant === 'outline'? 'red':'white')};
height: 50px;
width: 100px;
`
