import { styled } from 'styled-components';
import colors from '../../styling/colors';
import spacing from '../../styling/spacing';

export const BreadcrumbList = styled.ul`
    list-style: none;
    margin-bottom: ${spacing.xl};

    li + li:before {
        padding: 0 ${spacing.sm};
        color: black;
        content: '/';
    }
`;

export const BreadcrumbItem = styled.li`
    display: inline;

    a {
        text-decoration: none;
        color: ${colors.pink};

        &:hover {
            text-decoration: underline;
        }
    }
`;
