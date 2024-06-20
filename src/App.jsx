import './App.css'

import Header from './components/header'
import Nav from './components/nav'
import Footer from './components/footer'

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import Home from './pages/Home'
import Catalog from './pages/Catalog';
import Comment from './pages/Comment';
import Personal from './pages/Personal';

export default function App() {
  return (
    <Router>
      <div className="container-principal">
        <Header />
        <Nav />
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/catalog' exact Component={Catalog}/>
          <Route path='/comment' exact Component={Comment}/>
          <Route path='/personal' exact Component={Personal}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}