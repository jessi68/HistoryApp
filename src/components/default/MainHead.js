import React from 'react';
import styled  from 'styled-components';



const MainHeadBlock = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 0;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    font-family: "strongmil_bold";
    margin: 0;
    font-size: 40px;
    color: #343a40;
  }
`;


function MainHead() {
    return (
        <MainHeadBlock>
            <h1>나의 숨겨진 조상을 찾아서</h1>
        </MainHeadBlock>

    )
}

export default MainHead;