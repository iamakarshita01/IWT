    function Convert() {

    //fetching values from form
    let input=parseFloat(document.forms[0].elements['input'].value);
    let inputOption=document.forms[0].elements['inputOption'].value;
    let outputOption=document.forms[0].elements['outputOption'].value;

    let result;
    //conveting from C to K
    if( inputOption== 'C' && outputOption== 'K' ){
        result = input + 273 ;
    }
    //converting from C to F
    else if( inputOption== 'C' && outputOption== 'F' ){
        result= (input * 9 / 5 ) + 32 ;
    }
    //converting from K to F
    else if( inputOption== 'K' && outputOption== 'F' ){
        result= ( ( input - 32 ) * 9 / 5 ) + 273 ;
    }
    //converting from K to C
    else if( inputOption== 'K' && outputOption== 'C' ){
        result= input - 273;
    }
    //converting from F to C
    else if( inputOption== 'F' && outputOption== 'C' ){
        result= ( input - 32 ) * 9/5 ;
    }
    //converting from F to K
    else if( inputOption== 'F' && outputOption== 'K' ){
        result = ( input + 459.67) * 5/9 ;
    }
    else{
        result = input ;
    }

    // return result;

    document.getElementById("result").innerHTML = `${input} ${inputOption} is ${result.toFixed(2)} ${outputOption}`;
}