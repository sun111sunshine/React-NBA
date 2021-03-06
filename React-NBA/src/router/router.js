import React from 'react';

import {Provider} from 'react-redux';
import configureStore from '../stores/configureStore'

import {
    HashRouter  as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom'
import App from '../container/App/app';
import Index from '../container/Main/index';
import Login from '../container/User/login';
import EamilVerify from '../container/User/emailVerify';
import SignUp from '../container/User/signUp';
import Mydoc from '../container/User/mydoc';
import NBA from '../container/NBA/nba';
import Game from '../container/game/game';
import CBA from '../container/CBA/cba';
import Esports from '../container/Esports/esport';
import Soccer from '../container/Soccer/soccer';
import Community from '../container/Community/community';
import Team from '../container/NBA/team/team';
import TeamDetail from '../container/NBA/team/teamDetail';
import Player from '../container/NBA/player/player';
import PlayerDetail from '../container/NBA/player/playerDetail';
const store = configureStore();
const router = (
    <Router>
        <Provider store = {store}>
            <App>
                <Switch>
                    <Route exact path="/" render={()=>(<Redirect to="/home" />)} />
                    <Route path="/home" render={()=> 
                        <Index>
                            <Switch>
                                <Route  path="/home/nba" component={NBA} />
                                <Route  path="/home/cba" component={CBA} />
                                <Route  path="/home/nbaTeam" component={Team} />
                                <Route  path="/home/esports" component={Esports} />
                                <Route  path="/home/soccer" component={Soccer} />
                                <Route  path="/home/community" component={Community} />
                                <Route  path="/home/nbaPlayer" component={Player} />
                                <Route path="/home/PlayerDetail/:playerId" component={PlayerDetail} />
                                <Route path="/home/teamDetail/:teamId" component={TeamDetail} />
                                <Redirect to="/home/nba" />
                            </Switch>
                        </Index>
                    } />
                    <Route path="/game/:mid" render={(props)=>
                        <Game {...props} />
                    } />
                    <Route path="/login" component={Login} />
                    <Route path="/emailVerify" component={EamilVerify} />
                    <Route path="/signUp" component={SignUp} />
                    <Route path="/mydoc" component={Mydoc} />
                </Switch>
            </App>
        </Provider>
    </Router>
)

export default router;