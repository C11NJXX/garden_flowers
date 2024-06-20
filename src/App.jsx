import './App.css'
import Header from './components/header'
import Nav from './components/nav'
import Initial from './components/initial'
import Main from './components/main'
import Footer from './components/footer'
export default function App() {
  return (
    <div className="container-principal">
      <Header />
      <Nav />
      <Initial/>
      <Main/>
      <Footer/>
    </div>
  )
}