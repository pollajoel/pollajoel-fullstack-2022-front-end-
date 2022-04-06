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
                <h1 style={{ "flex": "1 90%", "fontSize": "25px" }}>Details</h1>
                <button className={styles.close_btn} onClick={onClose}>X</button>
            </div>

            <div>
                {item?.name || item?.title}
            </div>

            <div>
                <div className={styles.percentage__container}>
                    <div className={styles.percentage__values}
                    ></div>
                </div>
                <div className={styles.pogress__bar}>
                    <div className={styles.pogress__content}
                        style={{'backgroundColor':`${color}`}}
                    >
                    </div>
                </div>
            </div>
            <div className={styles.description__contain}>
                {item.description}
            </div>
            <div className={styles.date__container}>
                <div><strong>date de début:</strong> {item.start_date}</div>
                <div><strong>date de fin:</strong> {item.end_date}</div>
            </div> 
            <div>
                <div>statut:  <strong style={{'color':`${color}`}}>{item.statut.name}</strong></div>
            </div>
            <div>
                <div>Assigné à:  {item?.user?.name}</div>
            </div>
           



    
        </Modal>
    );
};

export default Windows;