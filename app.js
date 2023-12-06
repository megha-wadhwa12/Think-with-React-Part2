class ReactContainer extends React.Component {
  render() {
    return (
      <div>
        Hello! Welcome to Kalvium
        <div>Lets's rock and roll , This is babel</div>
      </div>
    );
  }
}

let container = document.getElementById("react-container")
// ReactDOM.render(React.createElement(ReactContainer),container)
ReactDOM.render(<ReactContainer />,container)


// function ReactContainer(){
//     return (
//               <div>
//                 Hello! Welcome to Kalvium
//                 <div>Lets's rock and roll , This is babel</div>
//               </div>
//             );
// }
// let container = document.getElementById("react-container")
// ReactDOM.render(<ReactContainer />,container)
