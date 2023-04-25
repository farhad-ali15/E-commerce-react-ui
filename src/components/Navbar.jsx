import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;
const Left = styled.div`
  flex: 1;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          nobis magni enim? Quis praesentium quisquam recusandae quia libero
          nesciunt? Soluta, ut reiciendis. Corporis incidunt obcaecati, magnam
          sunt repellat omnis rerum.
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
