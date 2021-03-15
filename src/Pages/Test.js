import { Component } from 'react';

import Button from 'react-bootstrap/Button'

class Test extends Component { 
 
    test(){
        console.log('test');
        fetch('https://tomekts.pythonanywhere.com/test/',{
        //  fetch('http://192.168.1.73:8000/test/',{
             method:'POST',
             credentials: 'include',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
         })
            
        
    }


  render(){
      return(
          <>
          <div>
              strona kontaktowa test 
              
              
                    <Button block size = "lg" type = "submit" onClick={this.test} >
                  Login
                  </Button>        
          </div>
      </>
      )
  }
}

export default Test;