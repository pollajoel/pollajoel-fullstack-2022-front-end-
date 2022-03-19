import React, {useState} from "react";
import Modal from "react-modal";
import Boutonwhite from "../bouton/boutonwhite/boutonwhite";
import Textareacustom from "../form/custom/textareacustom";
import styles from './windows.module.scss'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import StatutComponent from "../statutComponent/statutComponent";
import Displayer from "../Displaying/displayer";
import InputForm from "../form/inputForm/input";
import DatePicker from "react-datepicker";
import {faCalendarAlt, faCalendarCheck} from '@fortawesome/free-solid-svg-icons';
Modal.setAppElement("#__next");

const Windows = ({ show, onClose, item ,afterOpenModal, statutType, color}) => {
    const [startDate, setStartDate] = useState(new Date());
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
                <h1 style={{ flex: "1 90%" }}>Detail du projet</h1>
                <button className={styles.close_btn} onClick={onClose}>X</button>
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
                <form class>
                <div className={styles.form__wrapper}>
                    <div className={styles.form__container}>
                    {
                        statutType?<Displayer value={item.name}/>:<InputForm 
                            name="title"
                            value={item.name}
                            label=""
                            FontSize="24px"
                        />
                    }
                    </div>
                    <Textareacustom 
                        cols="35" 
                        rows="10"
                        resize="none"
                        disabled={statutType}
                        name="description"
                    
                    />
                    <div className={styles.statut__container}>
                        <div><h2>Status</h2></div> 
                        <StatutComponent statut="En cours"
                           color={color}
                        />
                    </div>
                    <div className={styles.form__container}>
                                {
                                statutType?<Displayer 
                                    value={item.name}
                                    title="Date de début: "
                                />: <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                                    
                                }
                    </div>
                            

                            <div className={styles.form__container}>
                                {
                                statutType?<Displayer value={item.name} title="Date de fin: "/>:
                                    <InputForm
                                        name="end_date"
                                        id="end_date"
                                        label="Fin"
                                        icon={faCalendarAlt}
                                        
                                    />
                                }
                           </div>

                    {
                        statutType?null:<div>
                            <Boutonwhite name="valider"
                                icon={faCheck}
                            />
                        </div>
                    }
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default Windows;