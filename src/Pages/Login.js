import { Component } from 'react';

class Login extends Component {


  state = {
    items:[],
    isLoader: false,    
  };

  componentDidMount() {    
    fetch("http://tomekts.pythonanywhere.com/rest/",{
      
      headers:{
        'Authorization': 'Bearer ' + localStorage.getItem('token')
        // Authorization: `Bearer + ${localStorage.getItem('token')}`
      }
    }
    ).then((response) =>{
      if(response.status === 200){
        console.log("pbrano");
        this.setState({ isLoader: true })
        return response.json();
      }else if(response.status === 401){
        console.log('błedny token')
        
      }else{
        console.log('cos poszło nie tak xD')
        
      }
    }).then(data => {
      this.setState({        
        items: data,
      })
    })  
    
    
    // .then(res =>  res.json())
    //   .then(data=> {
    //       this.setState({
    //         isLoader: true,
    //         items: data,
    //       })
    //   });      
      
  }

  render(){

    if(!this.state.isLoader){
      return(
        <div>loading...</div>
      )
    }else{
      return(
          <>
      <div className="Login">

      bla bla bla Logowanie         
        {console.log(this.state.items)}
        {this.state.items.map(item =>(
          <div key={item.username}>
            {item.username} email:  
           {item.email}   


            
          </div>
        ))}
      

      </div>
      </>
      )
    }
  }
}

export default Login;