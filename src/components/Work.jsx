import styled from 'styled-components';

const data = [
    'Web Design',
    'Develpment',
    'Illustration',
    'Product Design',
    'Social Media',
];

const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ListItem = styled.li`
    font-size: 80px;
    font-weight: bold;
    cursor: pointer;
    color: transparent;
    -webkit-text-stroke: 1px white;
    position: relative;
    width: max-content;

    ::after {
        content: '${(props) => props.slot}';
        top: 0;
        left: 0;
        position: absolute;
        width: 0;
        color: pink;
        overflow: hidden;
        white-space: nowrap;
    }

    &:hover {
        ::after {
            animation: moveText 0.5s linear both;

            @keyframes moveText {
                to {
                    width: 100%;
                }
            }
        }
    }
`;

const Right = styled.div`
    flex: 1;
`;

export const Work = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <List>
                        {data.map((singleData) => (
                            <ListItem key={singleData} slot={singleData}>
                                {singleData}
                            </ListItem>
                        ))}
                    </List>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    );
};
