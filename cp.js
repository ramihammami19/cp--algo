const str = "bonjour hhh rami."

    

function wordcountr(params) {
    let ruslta = 1
    for (let i = 0; i < params.length; i++) {
        if(params[i] == " ") 
        ruslta++
        
        
    }
    return ruslta
    
}

function vowlscountr(params) {
    let ruslta = 0
    let vr = [ "e" ,"o","a" ,"i" ,"u" ]
    for (let i = 0; i < params.length; i++) {
        if( vr.includes(  params[i] ) ) 
        ruslta++
        
        
    }
    return ruslta
    
}
function main(params) {
    console.log(`the string have ${params.length-wordcountr(params)} cratctres 
    the string have ${wordcountr(params)} words 
    the string have ${vowlscountr(params)} vowls ` ) 
    return params;
    
}

console.log(main(str));