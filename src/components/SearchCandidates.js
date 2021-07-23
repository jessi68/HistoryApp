
import { render } from '@testing-library/react';
import React, { useState } from 'react';

import lastNamesToFirstName from '../static/성씨_이름';
class SearchCandidates extends React.Component{
   // props: 검색할 데이터들
   // 검색할 알고리즘: strategy pattern
   
   
   constructor(props) {
       super(props);
        // this.state = {
        //     candidateView: "같은 성씨를 가진 유명인이 존재하지 않습니다.",
        //     strategy: props.strategyAlgorithm,
        //     data: props.data,
        //     target: props.target
        // }
    }

   render(){
    let candidateViews = [];
    let filteredData = this.props.strategyAlgorithm(this.props.data, this.props.target);
    let index = 0;
    for(let key in filteredData)  {
        let value = filteredData[key];
        let candidate = "";
        if(lastNamesToFirstName.hasOwnProperty(value)) {
            candidate = lastNamesToFirstName[value];
        }

        candidateViews.push(<li key={"searchCandidate" + index } onClick={() => this.props.history.push({
            pathname: "/SearchResults",
            state: {data: candidate}
          })}>{value}</li>);
          index += 1;
    }

    // filteredData.forEach(function (value) {
    //     console.log(value);
    //     candidateViews.push(<li key={"searchCandidate" + index }>{value}</li>);
    // });

    // this.state.candidateView = setInterval(() => {
    //     this.setState(({candidateView: candidateViews},  () => {
          
    //     }));
    //   }, 1000);

    // console.log(this.state.candidateView)
    return (<div>
        {candidateViews}
    </div>)

   }
}


export default SearchCandidates