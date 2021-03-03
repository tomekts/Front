import { Component } from 'react';
import '../Style/Home.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class Home extends Component { 
  handleSubmit = event => {
    event.preventDefault();
    this.loginUser(event.target.login.value, event.target.password.value);
   
}

state = {
  items:[],
  isLoader: false,
  token:'no',
  tokenRefresh:'bo',
};

loginUser(username, password) {
  console.log(username + password)
 // fetch('http://localhost:8080/user',{
  fetch('https://tomekts.pythonanywhere.com/api/token/',{
    method: 'POST',
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
    this.setState({token: json.access, tokenRefresh: json.refresh })
    localStorage.setItem('token', json.access)
    
  }))
  // .then(json => console.log(json.status))
  // .then(function(response){
  //   if(response.status === 200){
  //     console.log("zalogowano")
      
  //     // .then(res => res.json())
  //     // .then(json =>console.log(json))
  //   }else if(response.status === 422){
  //     console.log('uzytkownik nie został zarejestrownay')
  //     alert('uzytkownik juz istenieje')
  //   }else{
  //     console.log('cos poszło nie tak xD')
  //     alert('wystąpił poważny bład :D')
  //   }
  // }).then(res => res.json())
  //     .then(json =>console.log(json))
}
  
 
  

  componentDidMount() {
    // { localStorage.setItem('token', 'a')}
   
    fetch("https://tomekts.pythonanywhere.com/rest/products/",{
      
      headers:{
        // 'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjEzMDUwNDczLCJqdGkiOiJiYWViODI3OWE0MjU0ODEzYTQ0N2IyMjA0ZjhiZDlhMiIsInVzZXJfaWQiOjF9.LPW7PFF6ego4WBySaD4__boOeIwLYbAh5c-yCSpsUZs'
        
      }
    }
    ).then(res =>  res.json())
      .then(data=> {
          this.setState({
            isLoader: true,
            items: data,
          })
      });
        
        
      
  }
  
  render(){

    




    if(!this.state.isLoader){
      return <div>ładowanie....</div>
    }
    else{
      return(
          
      <div className="Home">

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
         

        bla bla bla Glowna <p></p>
        token accces: {this.state.token}<p></p>
        token refresh {this.state.tokenRefresh}<p></p>
          {this.state.items.map( item =>(
                <div key={item.id} className='product-cart'>
                  <div className='produkt'>
                    
                    <div className='text'>
                    {item.id} \ {item.title}
                    </div>                
                    
                    <div className='image'>
                      <img src={item.image} alt='cos nie diz'/>
                    </div>
                  
                  
                </div>
              </div>
          ))}
        


      </div>
      
      )
    }
  }
}

export default Home;