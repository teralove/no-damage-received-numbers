module.exports = function noDamageReceivedNumbers(dispatch) {
    
    let gameId;
    
    dispatch.hook('S_LOGIN', 10, (event) => {
        gameId = event.gameId;
    })
    
    dispatch.hook('S_EACH_SKILL_RESULT', 10, (event) => {
        if (event.target.equals(gameId) && event.type === 1) {
            event.type = 0;
            return true;
        }
    })
    
}