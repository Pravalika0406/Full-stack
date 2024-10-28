import Navbar from "./components/Navbar"

const App = () => {
    const data = {
        appname: "Hello"
    }
    const logodata = "mylogo"
    const test = "Hello world"
    return (
        <>
            <p className='text-yellow-500'>{test}</p>
            <Navbar appdata={data} logo={logodata} />
        </>

    )
}

export default App