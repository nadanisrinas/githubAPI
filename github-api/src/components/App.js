import React from 'react'
import ReactDOM from'react-dom'

import Search from './search'
import Navbar from './navbar'
import Card from './card'

const App = () => {
    return(
            <div>
                <Navbar/>
                <Card>
                    <p className="card-title">Github Repository</p>
                    <Search/>
                </Card>
            </div>
        
    );
}

export default App;