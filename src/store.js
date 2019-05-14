
// import redux from 'redux';
//const redux = require('redux');
import {noteData} from './firebaseConnect';
import * as redux from 'redux'


const noteInitialState = {}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD":
            console.log('ket noi thanh cong', JSON.stringify(action.item));
            noteData.push(action.item);
            return state
        default:
            return state
    }
}
const storeDemo = redux.createStore(allReducer);
export default storeDemo;
