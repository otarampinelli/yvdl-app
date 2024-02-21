import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const BasicPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  align-self: center;
  width: 50%;
  gap: 20px;
`;

type BasicPageProps = {
  children?: React.ReactElement;
};

function BasicPage({ children }: BasicPageProps) {
  return (
    <BasicPageWrapper>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </BasicPageWrapper>
  );
}

export default BasicPage;
