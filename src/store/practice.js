function initState(){
    return{
        count:0
    }
}


const practice ={
    // state : 상태를 의미하는 객체로서 initStore를 통해 상태 초기화
    state: initState,

    // mutations : 상태(변수)를 변경하기 위한 함수들의 집합
    // mutations은 컴포넌트에서 직접 호출되기 보다는, actions를 통해 mutation이 호출된다.
    // 그 이유는 여러 mutation을 연속적으로 호출하는 등ㅇ의 경우가 있을 수 있기 때문
    mutations:{
        increment(state){
            state.count++;
        }
    },
    actions:{
        // 아래와 같이 actions의 함수를 통해 mutations의 함수를 호출
        // 그러면 결국, 컴포넌트에서는 actions의 함수를 호출
        incrementCount(context){
            context.commit('increment')
        }
    },
    // 상태를 get하기 위한 함수들의 집합
    getters:{
        getCount: state => state.count
    }
}

export default practice;