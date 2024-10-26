
import Navbar from "./components/Navbar"
const App = () => {
    const data = {
        appname: "Hello"
    }
    const logo = "mylogo"
    const test = "hello world"
  return (
        <>
        <p className = "text-red-500">{test}</p>
          <Navbar appdata = {data} logo={logo} />
        </>
  )
}

export default App