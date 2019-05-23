function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
  }
  
  function modificator ( func ) {
    return func.bind(null, "test", "sample")
  
  }

var testFunc = modificator( sampleFunc )
testFunc()



function sampleFunc2 () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
  }
  
  function modificator2 ( func2 ) {
    func2.valueOf = function(){ return func2.toString().length;}
  
  }
  
  modificator2( sampleFunc2 )
  
  sampleFunc2()



  function testArguments () {
    function generateError ( numArgs ) {
      var err = new Error ( `Invalid arguments` )
      err.name = "Application"
      err.stack = `Function needs 3 arguments, but only ${numArgs} present`
      throw(err)
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    } 
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
  }
  
  testArguments ( "Google" )