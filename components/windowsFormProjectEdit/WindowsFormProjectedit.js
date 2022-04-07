import React, {useState, useEffect} from "react";
import Modal from "react-modal";
import Boutonwhite from "../bouton/boutonwhite/boutonwhite";
import TextareaForm from '../form/textarea/textareaForm';
import styles from './windows.module.scss'
import StatutComponent from '../assignTo/StatutComponent.js'
import InputForm from "../form/inputForm/input";
import {faCheck} from '@fortawesome/free-solid-svg-icons';
import AssignTo from "../statutComponentList/assignTo"
import {useMutation} from '@apollo/client'
import {UPDATEPROJECT_ALL} from '../../graphql/mutation'
import {useRouter} from 'next/router'
Modal.setAppElement("#__next");
const WindowsFormProjectedit = ({ show, onClose, item ,afterOpenModal, projectId, StatuId}, props) => {
    
    const router = useRouter()
    const [UpdateProject]=useMutation(UPDATEPROJECT_ALL,{
        onCompleted: (data)=>{
            //console.log( "Token: "+data )
            //localStorage.setItem("Token",data.authentification.token )
            //router.push("/")
            router.reload()
        },
        onError: (errors)=>{
            console.log( errors )
        }
    })
    
     const [formState, SetFormState]=useState({
        title: item.name || "",
        description: item.description || "",
        start_date: item.start_date || "",
        end_date: item.end_date || "",
        statutId: Number.parseInt(StatuId),
        userId: item.userId || "",
     })
     const [windowReady, SetwindowReady]= useState(false)
     useEffect(() => { SetwindowReady( true )},[])
     
     async function ADDprojectORtask(event){
        event.preventDefault();
            await UpdateProject({
                variables:{
                    id:  Number.parseInt(item.id),
                    projectInputUpdate:{
                    start_date: formState.start_date, 
                    end_date: formState.end_date, 
                    title: formState.title,
                    description: formState.description,
                    statutId: Number.parseInt(item.statut.id),
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
                <h1 style={{ flex: "1 90%", "fontSize":"25px" }}>Modifier-{item.name}</h1>
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
                            default={formState.description}
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

export default WindowsFormProjectedit;