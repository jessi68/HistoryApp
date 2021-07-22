

function SearchCandidates(props) {
   // props: 검색할 데이터들
   // 검색할 알고리즘: strategy pattern
   
   let candidateView = [];
   let strategy = props.strategyAlgorithm;

   console.log(props.data);
    console.log("aaa");
   let filteredData = strategy(props.data, props.target);

  
   for (const [index, value] of filteredData.entries()) {
        candidateView.push(<li key={index}>{value}</li>);
   }

    console.log(candidateView);
    return (<div>
        {candidateView}
    </div>)
}


export default SearchCandidates