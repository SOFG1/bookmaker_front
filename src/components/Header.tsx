import styled from "styled-components"

const StyledWrapper = styled.div`
    padding: 15px 40px;
    background-color: #313131;
`

const StyledLogo = styled.p`
    font-size: 30px;
    font-weight: 700;
    color: #1A1A1D;
    color: #fde054;
    span {
        color: #fff;
    }
`



export const Header = () => {
    return <StyledWrapper>
        <StyledLogo>Bookmaker <span>app</span></StyledLogo>
    </StyledWrapper>
}