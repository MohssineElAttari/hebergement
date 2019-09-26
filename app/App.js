import React, { Component } from 'react';
import RootNavigator from './RootNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers)}>
                <RootNavigator />
            </Provider>
        );
    }
}
export default App;