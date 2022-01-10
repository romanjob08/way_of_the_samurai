import cl from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Massage from "./Massage/Masage";

const Dialogs = (props) => {

    let state = props.massagesPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let massagesElements = state.massages.map(m => <Massage massage={m.massage}/>);
    let newMassageBody = state.newMassageBody;

    let onSendMassageClick = () => {
        props.sandMessage();
    }

    let onNewMassageChange = (e) => {
        let body = e.target.value;
        props.updateNewMassageBody(body)
    }

    return (
        <div className={cl.dialogs}>
            <div className={cl.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={cl.massages}>
                <div>{massagesElements}</div>
                <div>
                    <div>
                        <textarea value={newMassageBody}
                                  onChange={onNewMassageChange}
                                  placeholder='Enter your massage'/>
                    </div>
                    <div>
                        <button onClick={onSendMassageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
