

function startsWith(original, target) {
    console.log(original);
    console.log("Aaa");
    return original.startsWith(target);
}

function endsWith(original, target) {
    return original.endsWith(target);
}



function searchBy(isSatisfied) {
    

    const algorithm = function(datas, target) {
        
        let new_data = [];
        for (const [index, value] of datas.entries()) {
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