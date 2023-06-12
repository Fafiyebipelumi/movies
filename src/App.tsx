import Navbar from "./components/Navbar";
import { Pane } from 'evergreen-ui';
import SideNavbar from "./components/SideNavbar";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";


function App() {
  const [isShown, setIsShown] = useState<boolean>(false)
  const closeShow = () => {
    setIsShown(false)
  }
  const openShow = () => {
    setIsShown(true)
  }

  return (
    <Pane>
      <Navbar openShow={openShow} />
      <Pane display="flex">
        <SideNavbar isShown={isShown} closeShow={closeShow} />
        <Pane flex="1" padding={16}>
          {/* Main content goes here */}
          <Routes>
            <Route path='/' element={<Movies />} />
          </Routes>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default App;
