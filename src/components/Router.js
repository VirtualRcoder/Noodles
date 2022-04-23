import {Route} from 'react-router-dom';
import Home from './Home';
import Country from './Country';
import Brand from './Brand';

function Router(){
    return(
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/:country" component={Country}/>
            <Route path="/:brand" component={Brand}/>
        </div>
    )
}

export default Router