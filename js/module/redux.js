export function createStore(reducer){
	let state;
	let subscribeHandle = false; // 구독 구분 
	state = reducer(state,{}); // 초기 status 데이터 저장

	const getState = () => state; // State 값 가져오기 
	const subscribe = (handle) => { // 구독 기능 추가 
		subscribeHandle = handle;
		return () => subscribeHandle = false; // 구독 취소 
	};
	const dispatch = (action) => { // Action 전송
		state = reducer(state,action);
		subscribeHandle && subscribeHandle();
	}
	return {
		dispatch,
		getState,
		subscribe
	}
}


