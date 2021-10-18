import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import AllRides from './components/AllRides.js'
import './index.css';


function Main() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AllRides}/>
            </Switch>
        </BrowserRouter>
    )
}

ReactDOM.render(<Main/>, document.getElementById('root'));

