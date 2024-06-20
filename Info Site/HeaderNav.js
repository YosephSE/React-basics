import React from "react"
export default function HeaderNav() {
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
