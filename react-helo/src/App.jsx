import  React from 'react'

// class App extends React.Component{
//   render(){
//     return(
//       <>
//       <h1>helo</h1>
//       </>
//     )
//   }
// }

// state #######################################//
// class App extends React.Component{
//   constructor(){
//     super()
//     this.state={name:"akshay"}
//   }
//   render(){
//     return(
//       <>
//       <h1>hello {this.state.name}</h1>
//       </>
//     )
//   }
// }
// ##############################################################

// ############PROBS############DATA PASSING METHOD#####33
// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state={name:props.name,age:props.age}
//   }
//   render(){
//     return(
//       <>
//       <h1>hello {this.state.name}</h1>
//       <h1>age {this.state.age}</h1>
//       </>
//     )
//   }
// }




// nested class components##########################

// class Demo extends React.Component{
//   render(){
//     return (
//       <>
//       <h1>Demo components {this.props.name} </h1>
//       </>
//     )
//   }
// }




// class App extends React.Component {
//   render(){
//     return(
//       <>
//       <h1>hello</h1>
//       <h2>age {this.props.age}</h2>
//       <Demo name = {this.props.age}/>
//       </>
//     )
//   }

// }

// implementing user defined function#######################################

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = { age: 20 };
//   }

//   changeAge = () => {
//     // Use setState with the correct capitalization
//     this.setState({ age: 25 });
//   };

//   render() {
//     return (
//       <>
//         <h1>hello</h1>
//         <h2>age {this.state.age}</h2>
//         <button onClick={this.changeAge}>Change Age</button>
//       </>
//     );
//   }
// }


// ######################mounting (getderivedstatefromprops)##################

//  class App extends React.Component {
//    constructor(props) {
//      super(props);
//      this.state = { age: 20 };
//    }
//    changeAge = () => {
//      this.setState({ age: 25 })
//    }
//    static getDerivedStateFromProps(props, state) {
//      return { age: props.age };
//    }
//    render() {
//      return (
//        <>
//          <h2>age</h2>
//          <h2>age {this.state.age}</h2>
//          <button onClick={this.changeAge}>Change Age</button>
//        </>
//      )
//    }
//   }




// ######################mounting (componentDidMount())##################

// class App extends React.Component {
//      constructor(props) {
//        super(props);
//        this.state = { age: 20 };
//      }
//      componentDidMount(){
//        setTimeout(()=>{
//          this.setState({age:25})
//        },1000)
//      }
     
//      render(){
//        return (
//          <>
//            <h2>age</h2>
//              <h2>age</h2>
//               <h2>age {this.state.age}</h2>
//               <button onClick={this.changeAge}>Change Age</button>
//          </>
//        )
//      }
//     }
    

// #####updating : shouldComponentUpdate(),getSnapshotBeforeUpdate()  #############################################
  

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { age: 20 };
//   }
//   shouldComponentUpdate(){
//     return true
//   }
//   changeAge = () => {
//     this.setState({ age: 30 });
//   }
// componentDidMount(){
//   setTimeout(()=>{
//     this.setState({age:25})
//   },1000)
// }
// getSnapshotBeforeUpdate(prevProps, prevState){
//   console.log(prevProps,prevState)
// }
// componentDidUpdate(){
//   console.log("component Updated")
// }

  
//   render(){
//     return (
//       <>
//         <h2>age</h2>
//         <h2>age {this.state.age}</h2>
//         <button onClick={this.changeAge}>Change Age</button>
//       </>
//     )
//   }
//  }
 

// #####################unmounting(componentWillUnmount())###################

class App extends React.Component {
  constructor() {
    super();
    this.state = { show: true };
  }
  deletehead=()=>{
    this.setState({show:false})
  }
  render() {
    let myhead 
    if(this.state.show){
      myhead = <Sub/>
    }
    return (
      <div>
        {myhead}
        <h1>hello</h1>
        <button onClick={this.deletehead}>delete</button>
      </div>
    );
  }

}
class Sub extends React.Component {
  componentWillUnmount(){
    alert("component will unmount")
  }
  render(){
    return(
      <>
      <h1>hello</h1>
      </>
    )
  }
}

export default App