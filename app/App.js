import React, { Component } from 'react';
import RootNavigator from './RootNavigator';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import OnboardingTest from './views/OnboardingTest';
import Screens from './screen/Screens';
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['Remote debugger']);
class App extends Component {
    render() {
        return (
            // <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            //     <RootNavigator />
            // </Provider>
            <Screens />
        );
    }
}
export default App;