import React, {Component} from 'react'
import NavBar from './components/NavBar'
import SimpleMap from "./components/Map";

class App extends Component {

    username = "asa"

    render() {
        return (
            <div>
                <SimpleMap />

            </div>
        )
    }
}

export default App