export default (posts = [],action) => {
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return [...posts, action.payload];
        case 'UPDATE':
            return posts.map((p) => (
                p._id === action.payload._id ? action.payload : p
            ))
        default:
            return posts; 
    }
}