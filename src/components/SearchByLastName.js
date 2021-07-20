import React, { useState } from 'react';
import MainHead from "./default/MainHead";
import MainTemplate from "./default/MainTemplate";
import styled  from 'styled-components';
import lastNames from '../static/성씨_이름';
import firstNameToLastNames from '../static/이름_to_성씨';

const GlobalStyle=styled.div`
body{
  background:#e9ecef;
}
`;

const SecondStyleBlock = styled.div`
  padding-top: 10px;
  padding-left: 30px;
  padding-right: 0;
  padding-bottom: 0px;

  k {
    font-family: "NanumSquareRoundEB";
    margin: 0;
    font-size: 15px;
    color: #343a40;
    padding-bottom: 10px;

  }
`;

function SearchByLastName() {
    
  const [lastName, setLastName] = useState("");
  const [people, setPeople] = useState([]);

    function searchAndSave(lastName) {
     
        let people = lastNames[lastName];
        setPeople(people);
    }

    function showResults() {
       searchAndSave(lastName);
    }

    function saveLastName(event) {
      let lastName = event.target.value;
      setLastName(lastName);
    }

    let peopleView = [];

    for (const [index, value] of people.entries()) {
      peopleView.push(<li key={index}>{value}</li>)
    }

    return(
        <>
     
        <GlobalStyle />
        <MainTemplate>
        <MainHead />
        <SecondStyleBlock>
            <k>본인의 성씨를 입력해주세요. <br />
            예시) 전주 이씨
              </k>
        </SecondStyleBlock>     
               <input placeholder="성씨를 입력해주세요 예시) 전주 이씨" onChange={(e)=> saveLastName(e)}></input>
              <button style={{marginLeft:"30px"}} onClick={showResults}>결과 보기 </button>
        </MainTemplate>
               
        <div>
          {peopleView}
        </div>
        </>
        
    );
}

export default SearchByLastName;