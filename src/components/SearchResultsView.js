//function component 사용시:
import {useLocation} from "react-router";

function SearchResultsView(props) {
    
    const location = useLocation();
    let resultsView = [];
    let data = location.state.data;

    if(data === undefined || data.length === 0) {
      resultsView = "검색 결과가 없습니다."
    } else{
      for (const [index, value] of data.entries()) {
        resultsView.push(<li key={index}>{value}</li>)
      }
  } 

    return (
      
        <div>
           <button onClick={ () => {props.history.goBack()} }> 뒤로 버튼 </button>
          {resultsView}
        </div>
    );

}

export default SearchResultsView;