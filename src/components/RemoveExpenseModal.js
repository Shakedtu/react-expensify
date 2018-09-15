import React from "react";
import Modal from "react-modal";


const RemoveExpenseModal = (props) => (
    <Modal
        className="modal"
        closeTimeoutMS={200}
        contentLabel="Are You Sure?"
        isOpen={props.isOpen}
    >
        <div className="modal-layout">
            <div className="modal-layout__box">
                <h3 className="modal-layout__title">Are you sure you want to delete this expense?</h3>
                <div className="modal-layout__buttons">
                    <button
                        className="button button--secondary"
                        onClick={props.onClickNo}
                    >
                        No
                    </button>
                    <button className="button" onClick={props.onClickYes}>Yes</button>
                </div>
            </div>
        </div>
    </Modal>
);

export default RemoveExpenseModal; 
