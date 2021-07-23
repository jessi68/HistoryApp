//function component 사용시:
import {useLocation} from "react-router";

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

function SearchResultsView(props) {
    
    const location = useLocation();
    let resultsView = [];
    let data = location.state.data;
    let colors = []

    for(let i = 1; i < 6; i++) {
      let color =  "#000000";
      color = color.replaceAt(i, "F");
      color = color.replaceAt((i + 1 ), "F");
      console.log(color);
      colors.push(color)
    }

    if(data === undefined || data.length === 0) {
      resultsView = "검색 결과가 없습니다."
    } else{
      for (const [index, value] of data.entries()) {
        resultsView.push(<li key={index} style={{color: colors[index]}}>{value}</li>)
        
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