import styled from 'styled-components';
import colors from '../../styling/colors';

export const SkipToContentLink = styled.a`
    background: ${colors.green};
    color: ${colors.background};
    height: 30px;
    left: 50%;
    padding: 8px;
    position: absolute;
    transform: translateY(-100%);
    transition: transform 0.3s;

    &:focus {
        transform: translateY(0%);
    }
`;
