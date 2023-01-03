// code your solution here
function superbowlWin(records){
    const obj = records.find(checkWin);
    if( obj !== undefined){
        return obj.year  
    }
    else{
        return undefined
    }
}

function checkWin(element){
    if(element.result === 'W'){
        return true;
    }
}
