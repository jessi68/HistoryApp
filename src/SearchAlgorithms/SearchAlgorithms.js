function startsWith(original, target) {
    return original.startsWith(target);
}

function endsWith(original, target) {
    return original.endsWith(target);
}

function searchBy(isSatisfied) {
    
    const algorithm = function(datas, target) {
        
        let new_data = [];
        console.log(datas);
        for (let index = 0; index < datas.length; index++) {
            //console.log(value);
            let value = datas[index];
            if(isSatisfied(value, target)) {
                new_data.push(value);
            }
        }
        return new_data;
    }

    return algorithm;
}

let searchByPrefix = searchBy(startsWith);
let searchByPostfix = searchBy(endsWith);


export default searchByPrefix;