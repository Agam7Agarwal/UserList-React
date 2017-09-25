import React from 'react';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Userlisting from './userlisting';
import Editdetails from './Editdetails';

class App extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <Router>
                <div>
                <Route exact path="/"  component={Userlisting} />
                <Route path="/edit/:id"  component={Editdetails} />
                </div>
            </Router>
        )
    }
}

export default App;