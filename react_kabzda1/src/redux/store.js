// import profile_reducer from "./profile_reducer";
// import dialogs_reducer from "./dialogs_reducer";
// import navbar_reducer from "./navbar_reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, massage: 'hi my name is Roma', likesCount: 12},
//                 {id: 2, massage: 'react is cull !', likesCount: 4}
//             ],
//             newPostText: 'I am samurai! '
//         },
//         massagesPage: {
//             dialogs: [
//                 {id: 1, name: 'Dima'},
//                 {id: 2, name: 'Sem'},
//                 {id: 3, name: 'Ira'},
//                 {id: 4, name: 'Liza'},
//                 {id: 5, name: 'Zachar'}
//             ],
//             massages: [
//                 {id: 1, massage: 'Hi'},
//                 {id: 2, massage: 'How is your it-kamasutra?'},
//                 {id: 3, massage: 'Yo'},
//                 {id: 4, massage: 'Yo'},
//                 {id: 4, massage: 'Yo'}
//             ],
//             newMassageBody: ""
//         },
//         navbar: {}
//     },
//     _callSubscriber() {
//         console.log('state changes')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//
//     dispatch(action) {
//         this._state.profilePage = profile_reducer(this._state.profilePage, action)
//         this._state.massagesPage = dialogs_reducer(this._state.massagesPage, action)
//         this._state.navbar = navbar_reducer(this._state.navbar, action)
//
//         this._callSubscriber(this._state);
//     }
// }
//
// export default store;
// window.store = store;
