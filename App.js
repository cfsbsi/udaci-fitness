import React from 'react';
import {StyleSheet,
        View
} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import  AddEntry from './components/AddEntry'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
            <View style={{flex: 1}}>
                <AddEntry />
            </View>
            </Provider>
        );
    }
}