
function ReactApp(){
  return (
    <div>
        <img src="logo.png" width="40px"/>
        <h1>Fun Facts About React!</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>It is maintained by Facebook</li>
        </ul>
    </div>
)
}
ReactDOM.render(<ReactApp/>, document.querySelector('#root'))