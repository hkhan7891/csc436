function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            return state;
    }
}

  function postsReducer (state, action) {
    switch (action.type) {
        
            case 'CREATE_TODO':
                const newTodoItem = { 
                    title: action.title,
                    description: action.description,
                    author:action.author,
                    complete:action.complete,
                    datecompleted:action.datecompleted,
                    datecreated:action.datecreated
                   }
                   if(state !=null)
                  return [ newTodoItem, ...state ]
       
                  case 'TOGGLE_TODO':
                      if(state !=null)
            return state.map((p, i) => {
                if(i === action.id) {
                    p.complete = action.complete;
                    p.datecompleted = Date.now();
                    
                }
                return p;
            })
        case 'DELETE_TODO':
            if(state !=null)
             return state.filter((p,i) => i !== action.todoitem)
        case 'FETCH_TodoItem':
            
            return action.itemsA
        default:
           return state;
    }
}
    export default function appReducer (state, action) {
       
        return {
            user: userReducer(state.user, action),
            
            itemsA: postsReducer(state.itemsA, action)
        }
  
    }
  