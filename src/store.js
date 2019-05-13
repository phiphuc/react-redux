const redux = require('redux');

const oldState = {
    numb: ['chuot', 'man hinh', 'ban phim'],
    editStatus: false
}
const reducer1 = (state = oldState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return {
                ...state, editStatus: true
            };
        case 'ADD':
            return {
                ...state, numb: [...state.numb, action.newItem]
            };
        case 'DELETE':
            return {
                ...state, numb: state.numb.filter((value, key) => (key !== action.index))
            }
        default:
            return state
    }

}

const numbInitialState = {}
const numbReducer = (state = numbInitialState, action) => {
    switch (action.type) {
        case 'ADD':
        return {
            ...state, numb: [...state.numb, action.newItem]
        };
    case 'DELETE':
        return {
            ...state, numb: state.numb.filter((value, key) => (key !== action.index))
        }
        default:
            return state
    }
}

const statusInitialState = {}
const statusReducer = (state = statusInitialState, action) => {
    switch (action.type) {
        case 'CHANGE_EDIT_STATUS':
            return {
                ...state, editStatus: true
            };
        default:
            return state
    }
}



const store1 = redux.createStore(reducer1)
store1.subscribe(() => {
    console.log('state change ', store1.getState());
})
console.log(store1.getState());
store1.dispatch({
    type: 'CHANGE_EDIT_STATUS'
})
console.log(store1.getState());

store1.dispatch({
    type: 'ADD',
    newItem: 'Tai nghe'
});
console.log(store1.getState());

store1.dispatch({
    type: 'DELETE',
    index: 1
})
console.log(store1.getState());

export default  store1