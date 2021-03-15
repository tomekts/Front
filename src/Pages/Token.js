import { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Token extends Component { 
    handleSubmit = event => {
        event.preventDefault();
        this.loginUser(event.target.login.value, event.target.password.value);
       
    }


    loginUser(username, password) {
        
       
        fetch('http://192.168.1.73:8000/log/',{
        // fetch('https://tomekts.pythonanywhere.com/log/',{
          method: 'POST',
          credentials: 'include',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username: username,
              password: password,
          })
      }
        
        ).then(res => res.json()
        .then(json => {
          if(res.status=== 401){
            alert('błedne hasło lub login')
          }
          console.log(json)
          
        }))
        
      }    

test(){
    console.log('test');
    
    fetch('https://tomekts.pythonanywhere.com/test/',{
    //  fetch('http://192.168.1.73:8000/test/',{
         method:'POST',
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
              strona pobrania test 
          </div>
          <div className="login">
            <Form onSubmit = { this.handleSubmit } >
            <Form.Group controlId = "login" size = "lg">
                  <Form.Label> Login </Form.Label>
                  <Form.Control />
                  </Form.Group>

                  <Form.Group controlId = "password" size = "lg">
                  <Form.Label> Password </Form.Label>
                  <Form.Control type="password" />
                  </Form.Group>    

                  <Button block size = "lg" type = "submit">
                  Login
                  </Button>         
          </Form>
          </div>  
      </>
      )
  }
}

export default Token;