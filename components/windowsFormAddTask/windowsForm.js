import React, {useState} from "react";
import Modal from "react-modal";
import Boutonwhite from "../bouton/boutonwhite/boutonwhite";
import TextareaForm from '../form/textarea/textareaForm';
import styles from './windows.module.scss'
import InputForm from "../form/inputForm/input";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import AssignTo from "../statutComponentList/assignTo"
import {useQuery} from '@apollo/client'
import {useMutation} from '@apollo/client'
import {CREATE_TASK} from '../../graphql/mutation'
import {useRouter} from 'next/router'
Modal.setAppElement("#__next");
const WindowsForm = ({ show, onClose, item ,afterOpenModal, projectId, StatutId}) => {
    
    const router = useRouter();
    
    const [AddTasks] = useMutation(CREATE_TASK,{
        onCompleted: (data)=>{ 
            router.reload();
        },
        onError: (errors)=>{ console.log( errors ) }
    })
    const SubmitTask = async (event) => {
        event.preventDefault();
        await AddTasks({
            variables: {taskInput:{
                name:formState.name,
                description: formState.description,
                start_date: formState.start_date,
                end_date: formState.end_date,
                statutId:Number.parseInt(StatutId),
                userId: Number.parseInt( formState.userId),
                projectId: Number.parseInt(projectId)
            } },
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        });
    }

    const [formState, SetFormState]=useState({
        name: "",
        description:"",
        start_date: Date.now(),
        end_date: Date.now() ,
        userId:"",
     })
    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            onAfterOpen={afterOpenModal}
            contentLabel="Label"
        >
            <div className={styles.close_btn_ctn}>
                <h1 style={{ flex: "1 90%" }}>Nouvelle t??che {projectId}-{StatutId}</h1>
                <button className={styles.close_btn} onClick={onClose}>X</button>
            </div>
            <div>
                <form>
                    <div className={styles.date__container}>
                        <div className={styles.date__input}>
                            <InputForm 
                                label="nom de la t??che*"
                                name="name"
                                error={true}
                                id="name"
                                onChange={(e)=>SetFormState({...formState, name:e.target.value })}
                                type="text"
                            />
                        </div>
                        <div className={styles.date__input}>
                        <AssignTo
                            label="assign?? a"
                            onChange={e=>SetFormState({
                                ...formState, 
                                userId:Number.parseInt(e.target.value),
                                defautValue:e.target.value
                            })}
                            
                            name="userId"
                            description="veuillez choisir un utilisateur..."
                        />
                        </div>
                    </div>

                    <div className={styles.date__container}>
                        <div className={styles.date__input}>
                            <InputForm 
                                label="Date de debut *"
                                name="start_date"
                                error={true}
                                onChange={(e)=>SetFormState({...formState, start_date:e.target.value })}
                                type="date"
                                value={formState.start_date}
                            />
                        </div>
                        <div className={styles.date__input}>
                            <InputForm 
                                type="date"
                                name="end_date"
                                label="Date de fin"
                                error={true}
                                onChange={(e)=>SetFormState({...formState, end_date:e.target.value })}
                                value={formState.end_date}
                            />
                        </div>
                    </div>
                    <div className={styles.current__statut}>
                        <TextareaForm
                    
                            rows={5}
                            label="Description"
                            type="text"
                            name="description"
                            error={true}
                            onChange={(e)=>SetFormState({...formState, description:e.target.value })}
                        />
                    </div>
                    <div className={styles.data__buton}>
                        <Boutonwhite icon={faCheck} name="Ajouter" onClick={e=>SubmitTask(e)}/>
                    </div>

                </form>
            </div>
        </Modal>
    );
};

export default WindowsForm;