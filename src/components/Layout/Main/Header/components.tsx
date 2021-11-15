import styled from 'styled-components';
import spacing from '../../../../styling/spacing';
import Container from '../../../Container';

export const HeaderContainer = styled(Container)`
    display: flex;
    align-items: flex-end;
`;

export const HeaderWrapper = styled.header`
    margin-bottom: ${spacing.md};
`;
