const UPDATE_NEW_MASSAGE_BODY = 'UPDATE-NEW-MASSAGE-BODY';
const SEND_MASSAGE = 'SEND-MASSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sem'},
        {id: 3, name: 'Ira'},
        {id: 4, name: 'Liza'},
        {id: 5, name: 'Zachar'}
    ],
    massages: [
        {id: 1, massage: 'Hi'},
        {id: 2, massage: 'How is your it-kamasutra?'},
        {id: 3, massage: 'Yo'},
        {id: 4, massage: 'Yo'},
        {id: 4, massage: 'Yo'}
    ],
    newMassageBody: ""
}

const dialogs_reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MASSAGE_BODY:
            state.newMassageBody = action.body;
            return state;
        case SEND_MASSAGE:
            let body = state.newMassageBody;
            state.newMassageBody = '';
            state.massages.push({id: 6, massage: body})
            return state;
        default:
            return state;
    }
}

export const sandMessageCreator = () => ({type: SEND_MASSAGE});
export const updateNewMassageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MASSAGE_BODY, body: body})

export default dialogs_reducer;