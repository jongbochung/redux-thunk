export function getActors(actorList, searchingKeyword, number) {
    if(actorList.indexOf(',') >0 ) {
        var actors = '';
        var actorArray = actorList.split(',');
        var searchingActorIndex = searchStringInArray(searchingKeyword, actorArray);
        if(searchingActorIndex ===0 ) {
            searchingActorIndex = 1;
        }
        var searchingActor = actorArray[searchingActorIndex];

        for(var i=0; i<number-1; i++) {
            if(actorArray[i] === undefined) {
                break;
            } else {
                actors += actorArray[i] + ",";
            }
        }
        return actors+searchingActor;
    }

    return actorList;
}

function searchStringInArray(str, strArray) {
    for (var i=0; i<strArray.length; i++) {
        if (strArray[i].toUpperCase().match(str.toUpperCase())) return i ;
    }
    return -1;
}
