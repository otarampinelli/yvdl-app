import styled from "styled-components";

const FooterWrapper = styled.footer`
  display: flex;
  color: #fff;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  background: rgb(39, 43, 51);
  min-height: 40px;
  width: 100%;
`;

function Footer() {
  return (
    <FooterWrapper>
      <span>otarampinelli</span>
    </FooterWrapper>
  );
}

export default Footer;
