import Navbar from "./components/Navbar";
import { Pane, Heading, Paragraph } from 'evergreen-ui';
import SideNavbar from "./components/SideNavbar";


function App() {

  return (
    <Pane>
      <Navbar />
      <Pane display="flex">
        <SideNavbar />
        <Pane flex="1" padding={16}>
          {/* Main content goes here */}
          <Heading size={600}>Main Content</Heading>
          <Paragraph>This is the main content area.</Paragraph>
        </Pane>
      </Pane>
    </Pane>
  )
}

export default App;
