import {sandMessageCreator, updateNewMassageBodyCreator} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        massagesPage: state.massagesPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMassageBody: () => {
            dispatch(sandMessageCreator())
        },
        sandMessage: (body) => {
            dispatch(updateNewMassageBodyCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
