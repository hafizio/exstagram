function postComments(state = [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.user,
        text: action.text
      }]
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    default:
      return state
  }
}

function comments(state = [], action) {
  return {
    comments: postComments(state.comments, action)
  }
}

export default comments
