import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/pages/Footer/Footer'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import SignUp from './components/pages/Signup/Signup'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/services' component={Services} />
                <Route path='/products' component={Products} />
                <Route path='/sign-up' component={SignUp} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
