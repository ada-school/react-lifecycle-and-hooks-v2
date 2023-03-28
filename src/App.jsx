import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Pages from "./pages"

import "./index.css"

function App() {
  return (
    <>
      <Header />
      <Body>
        <Pages />
      </Body>
      <Footer />
    </>
  )
}

export default App
