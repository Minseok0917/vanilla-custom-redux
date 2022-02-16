import { createStore} from './module/redux.js';


const initialState = {
	count:0
};

function countReducer(state=initialState,action){
	switch(action.type){
		case 'ADD_COUNT':
			return { 
				...state,
				count : state.count+1
			};
		default:
			return state;
	}
}

function handle(){
	const state = store.getState();
	console.log(state.count);
}

const store = createStore(countReducer);
const unsubscribe = store.subscribe(handle);
store.dispatch({ type:"ADD_COUNT" }); // 1
unsubscribe();  // 구독 취소
store.dispatch({ type:"ADD_COUNT" });
console.log( store.getState().count ); // 2