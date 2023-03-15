import styled from 'styled-components';
import { Hero } from './components/Hero';
import { Who } from './components/Who';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import { Test } from './components/Test';

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    color: #fff;
    background: url(./img/bg.jpeg);
    background-size: cover;
`;

export const App = () => {
    return (
        <Container>
            <Hero />
            <Who />
            <Work />
            <Contact />
            <Test />
        </Container>
    );
};
