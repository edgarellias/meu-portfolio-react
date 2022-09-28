import styled from "styled-components";

export const Title = ({ children }) => {
	return <Container>{children}</Container>;
};

const Container = styled.div`
	text-align: center;
	color: #32abf1;
    
    h1 {
        padding: 25px 0;
        font-size: 2.5rem;
    }
    
    @media screen and (min-width: 768px) {
        h1 {
            padding: 45px 0;
            font-size: 3.5rem;
        }
    }
`;
