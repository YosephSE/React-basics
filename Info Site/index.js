import HeaderNav from './HeaderNav'
import Main from './Main'
import Footer from './Footer'
import React from 'react';
import ReactDOM from 'react-dom'

console.log(HeaderNav, Main, Footer)
function Page() {
  return (
    <div>
      <HeaderNav />
      <Main />
      <Footer />
    </div>
  );
}



ReactDOM.render(<Page />, document.querySelector("#root"));
