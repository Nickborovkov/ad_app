const addMessage= `ADD-MESSAGE`;
const updateMessageText= `UPDATE-MESSAGE-TEXT`;
const clearMessage= `CLEAR-MESSAGE`;


let initialState = {
    users: [
        {id:1, name: `Rasheed Thompson`},
        {id:2, name: `Tiana Jaskolski`},
        {id:3, name: `Linda Stokes`},
        {id:4, name: `Jorge Wiza`},
        {id:5, name: `Garret Leuschke`},
        {id:6, name: `Ilene Treutel`},
        {id:7, name: `Devan Haley`},
        {id:8, name: `Dane Boyle`},
        {id:9, name: `Ivah Mohr`},
        {id:10, name: `Kurtis Walsh`},
    ],
    messages: [
        {id:1, message:`quantifying`},
        {id:2, message:`434-806-2276`},
        {id:3, message:`Mara_Block`},
        {id:4, message:`tertiary`},
        {id:5, message:`The Football Is Good For Training`},
        {id:6, message:`direct_black.mp3`},
        {id:7, message:`Generic Steel Sausages`},
        {id:8, message:`Cross-platform analyzing workforce`},
        {id:9, message:`We need to generate the redundant GB program!`},
        {id:10, message:`Generating the array won't do anything!`},
    ],
    newMessageText: ``
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
                let newMessage = {
                    id: 11,
                    message: state.newMessageText
                }
                state.messages.push(newMessage);
                state.newMessageText = ``;
                return state;
        case updateMessageText:
                state.newMessageText = action.newMessageText;
                return state;
        case clearMessage:
                state.newMessageText = ``;
                return state;
        default:
            return state
    }
};
export default dialogsReducer


export const addMessageActionCreator = () => ({type: addMessage});
export const updateMessageActionCreator = (text) => ({type: updateMessageText, newMessageText: text});
export const clearMessageActionCreator = () => ({type: clearMessage});