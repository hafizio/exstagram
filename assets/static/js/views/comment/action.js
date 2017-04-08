export function addComment(user, text) {
  return {
    type: 'ADD_COMMENT',
    user,
    text
  }
}

export function removeComment(i){
  return {
    type: 'REMOVE_COMMENT',
    i
  }
}
