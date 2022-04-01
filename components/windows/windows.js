import React, {useState} from "react";
import Modal from "react-modal";
import styles from './windows.module.scss'
Modal.setAppElement("#__next");

const Windows = ({ show, onClose, item ,afterOpenModal, statutType, color}) => {
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            onAfterOpen={afterOpenModal}
            contentLabel={item.name}
        >
            <div className={styles.close_btn_ctn}>
                <h1 style={{ flex: "1 90%" }}>Details</h1>
                <button className={styles.close_btn} onClick={onClose}>X</button>
            </div>

            <div>
                {item?.name || item?.title}
            </div>

            <div>
                <div className={styles.percentage__container}>
                    <div className={styles.percentage__values}
                    >80%</div>
                </div>
                <div className={styles.pogress__bar}>
                    <div className={styles.pogress__content}
                        style={{'background-color':`${color}`}}
                    >
                    </div>
                </div>
            </div>
            <div>
                {item.description}
            </div>
            <div>
                <div>{item.start_date}</div>
                <div>{item.end_date}</div>
                <div>{item.statut?.name}</div>
            </div>
            <div>
                <div>Assigné à:  {item?.user?.name}</div>
            </div>
           



    
        </Modal>
    );
};

export default Windows;