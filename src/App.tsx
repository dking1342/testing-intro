import React from 'react'
import ButtonWrapper from './components/ButtonWrapper';
import Counter from './components/Counter';
import Person from './components/Person';
import ReduxCounter from './components/ReduxCounter';
import SideBar from './components/SideBar';
import "./index.css";

const App = () => {
  const sidebarObj = [
    {
      name: "test",
      href: "/test",
    }
  ]


  return (
    <main>
      <h1>App</h1>
      <Person name="joe" />
      <SideBar items={ sidebarObj } />
      <ButtonWrapper title="Add item" />
      <Counter />
      <ReduxCounter />
    </main>
  )
}

export default App