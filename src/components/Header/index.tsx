import styled from "styled-components";

const HeaderWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(39, 43, 51);
  min-height: 50px;
  width: 100%;
  font-weight: 700;
  font-size: 40px;
  font-family: "Nabla", system-ui;
  margin-bottom: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <span>YVDL</span>
    </HeaderWrapper>
  );
}

export default Header;
