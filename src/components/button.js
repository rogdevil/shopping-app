import styled from 'styled-components';

export const ButtonContainer = styled.button`
	text-transform: capitalize;
	padding: 0.5em;
	border-radius: 1em;
	border: solid 0.1em black;
	cursor: pointer;
	transition: all 0.5s ease-in-out;
	&:hover{
		background-color: black;
		color: white;
	}
`;