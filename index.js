// code your solution
function saturdayFun(fun="roller-skate"){

    return`This Saturday, I want to ${fun}!`
}
function mondayWork(work="go to the office"){
        
    return `This Monday, I will ${work}.`
}
function wrapAdjective(wrapper){
    return function(adjective){
        return`You are ${wrapper}${adjective}${wrapper}!`
    }
}
