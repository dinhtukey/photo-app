import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import AddEditPage from './pages/AddEdit/index';
import MainPage from './pages/Main';
import NotFound from './../../components/NotFound';

function Photo(props) {
    const match = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${match.url}`} component={MainPage} />
            <Route exact path={`${match.url}/add`} component={AddEditPage} />
            <Route exact path={`${match.url}/:photoId`} component={AddEditPage} />

            <Route component={NotFound}/>
        </Switch>
    );
}

export default Photo;