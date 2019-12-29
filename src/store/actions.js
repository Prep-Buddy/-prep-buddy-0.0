export default{
    firstPageSeen: ({commit}) =>{
        commit("changeFirstPageSeenStatus")
        console.log("Got to the action")
    }
}