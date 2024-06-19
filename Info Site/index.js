function Page() {
  return (
    <div>
      <HeaderNav />
      <Main />
      <Footer />
    </div>
  );
}

function HeaderNav() {
  return (
    <header>
      <nav>
      <img src="logo.png" />
        <ul className="flex">
          <li>React</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
function Main() {
  return (
    <div>
      <h1>Fun Facts About React!</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>It is maintained by Facebook</li>
      </ul>
    </div>
  );
}

function Footer() {
  return <footer><small>© 2024 Yoseph Kedir. All rights reserved.</small></footer>;
}

ReactDOM.render(<Page />, document.querySelector("#root"));
