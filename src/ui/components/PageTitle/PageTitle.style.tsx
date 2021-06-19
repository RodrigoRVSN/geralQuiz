import { experimentalStyled as styled } from '@material-ui/core/styles';

export const PageTitleContainer = styled("div")`
  margin: ${({ theme }) => theme.spacing(15)};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: ${({ theme }) => theme.spacing(5)};
  }
`;

export const PageTitleStyled = styled('h2')`
    margin: 0;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size:  ${({ theme }) => theme.typography.h4.fontSize};
    font-weight: 600;
    ${({ theme }) => theme.breakpoints.down('md')}{
        color: red;
    }
`;

export const PageSubtitleStyled = styled('h3')`
    margin: ${({ theme }) => theme.spacing(1.5) + ' ' + 0};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: normal;
    ${({ theme }) => theme.breakpoints.down('md')}{
        font-size: ${({ theme }) => theme.typography.body2.fontSize};
    }
`;