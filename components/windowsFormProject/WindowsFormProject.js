import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import Boutonwhite from "../bouton/boutonwhite/boutonwhite";
import TextareaForm from '../form/textarea/textareaForm';
import styles from './windows.module.scss'
import InputForm from "../form/inputForm/input";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import AssignTo from "../statutComponentList/assignTo.js"
import {useMutation} from '@apollo/client'
import {CREATE_PROJECT} from '../../graphql/mutation'
import {useRouter} from 'next/router'
Modal.setAppElement("#__next");
const WindowsFormProject = ({ show, onClose, item ,afterOpenModal, projectId, StatuId}, props) => {
    
    const router = useRouter()
    const [CreateProject] = useMutation(CREATE_PROJECT, {
        onCompleted: (data)=>{
            router.reload()
        },
        onError: (errors)=>{
            console.log( "here is errors...")
            console.log( errors )
            console.log( formState )
        }
    })
    
     const [formState, SetFormState]=useState({
        title: props.task?.name || "",
        description: props.task?.description || "",
        start_date: props.task?.start_date || "",
        end_date: props.task?.end_date || "",
        statutId: Number.parseInt(StatuId),
        userId: props.task?.userId || "",
     })
     const [windowReady, SetwindowReady]= useState(false)
     useEffect(() => { SetwindowReady( true )},[])
     
     async function ADDprojectORtask(event){
        event.preventDefault();
            await CreateProject({
                variables:{projectdataInput:{
                    start_date: formState.start_date, 
                    end_date: formState.end_date, 
                    title: formState.title,
                    description: formState.description,
                    statutId: Number.parseInt(StatuId),
                    userId: Number.parseInt(formState.userId)
                }},
                context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
            })
     }

    return (
        <Modal
            isOpen={show}
            onRequestClose={onClose}
            className={styles.modal}
            overlayClassName={styles.overlay}
            onAfterOpen={afterOpenModal}
            contentLabel="Label">
            <div className={styles.close_btn_ctn}>
                <h1 style={{ flex: "1 90%", "fontSize":"25px" }}>Ajouter un projet {StatuId}</h1>
                <button className={styles.close_btn} onClick={onClose}>X</button>
            </div>
            <div>
                <form>
                    <div className={styles.date__container}>
                        
                        <div className={styles.date__input}>
                            <InputForm 
                                label="nom du projet*"
                                name="title"
                                error={true}
                                id="title"
                                onChange={(e)=>SetFormState({...formState, title:e.target.value })}
                                value={formState.title}
                                type="text"
                            />
                        </div>

                        <div className={styles.date__input}>
                        <AssignTo
                            label="assigné a"
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
                                label="Date de debut"
                                name="start_date"
                                error={true}
                                onChange={(e)=>SetFormState({...formState, start_date:e.target.value })}
                                type="date"
                                value={formState.start_date}
                                min={`${Date.now()}`}
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
                       <Boutonwhite icon={faCheck} name="Valider" onClick={e=>ADDprojectORtask(e)}/>
                    </div>

                </form>
            </div>
        </Modal>
    );
};

export default WindowsFormProject;