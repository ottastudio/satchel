function useToggle({reducer = (s, a) => a.changes} = {}) {
    const [{on}, dispatch] = React.useReducer(
        (state, action) => {
            const changes = toggleReducer(state, action)
            return reducer(state, {...action, changes})
        },
        {on: false}
    )
}

function toggleReducer (state, action){
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}