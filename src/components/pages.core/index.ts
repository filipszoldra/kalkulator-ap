import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

export const AppContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    background: ${({theme}) => theme.colors.content.background};
    position: relative;
`;