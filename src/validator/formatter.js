function trim(){

    let name = "ashok ramjatan sahani"
    
    let result = name.trim()
    
    console.log(result)
    
    }
    
    function convert(){
    
    let string = 'FunctionUp'
    
    let lowercase = string.toLowerCase()
    
    let uppercase = string.toUpperCase() 
    console.log(lowercase, uppercase)
    }
    
     module.exports.trim = trim
    
     module.exports.convert = convert