import React, {useState, useEffect} from 'react'
import Boutonwhite from '../bouton/boutonwhite/boutonwhite'
import styles from './rolesList.module.scss'
import {faCheck,faEdit, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import {DELETE_STATUT,  UPDATE_STATUT, DELETE_RULES, UPDATE_RULES} from '../../graphql/mutation'
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/router'

export default function RolesList(props) {
    const router = useRouter()
    const [DeletestatutMutation] = useMutation(DELETE_STATUT, {
        onCompleted: (data)=>{
            router.reload()
        },
        onError: (errors)=>{}
     })

     const [DeleteRules] = useMutation(DELETE_RULES, {
        onCompleted: (data)=>{
            router.reload()
        },
        onError: (errors)=>{}
     })

     const [UpdateStatutMutation] = useMutation(UPDATE_STATUT, {
        onCompleted: (data)=>{
            //alert( "add successfully..")
            router.reload()
            SetformState({...data.statuts})
        },
        onError: (errors)=>{}
    })

    const [UpdateRules] = useMutation(UPDATE_RULES, {
        onCompleted: (data)=>{
            //alert( "add successfully..")
            router.reload()
            SetformState({...data.statuts})
        },
        onError: (errors)=>{}
    })
    


    const UpdateStatut = async(e, statutId, type)=>{
        
        e.preventDefault();
        if( type=="statut")
       {
        await UpdateStatutMutation({
            variables:{
                id:statutId,
                Statutinput:{...formState}
            },
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })
      }else{

        await UpdateRules({
            variables:{
                id:statutId,
                Userroleinput:{...formState}
            },
            context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
        })


      }

    }

    const DeleteStatut = async(statutId, type)=>{

        if( type=="statut"){

            await DeletestatutMutation({
                variables:{id:statutId},
                context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
            })
        }else{

            await DeleteRules({
                variables:{id:statutId},
                context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
            })
        }

    }

    const[formState, SetformState] = useState({

    })
    const [windowsIread, setWindowsIsready]=useState(false)
    const [ editstate, seteditsatet]=useState([])
    

    const ActiveEdit = (e,index)=>{
        
        e.preventDefault();
        let tab =[...editstate];
        for( let i=0; i<tab.length; i++)
            {
                if( i==index)
                    tab[index]=true;
                else{
                    tab[i]=false;
                }
            }
            seteditsatet(tab)

    }

    const Validate__confirm = (e)=>{

        e.preventDefault();
        let tab =[...editstate];
        for( let i=0; i<tab.length; i++)
            {
                tab[i]=false;
            }
            seteditsatet(tab)
        
    }
    
    useEffect(() => {
        setWindowsIsready(true)
        const Initstate = ()=>{
            let tab =[]
            for( let i=0; i<props.roles.length; i++){
                tab.push(false)
            }
            seteditsatet( tab );
        }
        Initstate();
    })

  return (
    <div className={styles.container__wrapper}>
        {console.log( props?.roles)}
    <form>
        {
            windowsIread?<div>
                {props?.roles?.map( (item, index,) =>
                <div className={styles.roles__wrapper} key={index}>
                    <div className={styles.input__wrapper}>
                       {
                            editstate.at(index)?<input type="text" 
                                name="name" 
                                className={styles.active__input}
                                onChange={e=>SetformState({...formState, name:e.target.value})}
                            />
                            :<input type="text" name={item.name} disabled 
                                value={item.name}
                                className={styles.desactived__input}
                            />
                        }
                    </div>
                    {
                    props.type=="statut"?<div className={styles.color__block}>
                        { 
                            editstate.at(index)?<input
                                    name="color" 
                                    type="color" 
                                    value={item.color} 
                                    onChange={e=>SetformState({...formState, color:e.target.value})}
                                />:
                            <input type="color" value={item.color} disabled/> 
                        }
                    </div>:null
                    }

                   {props.type=="statut"?
                    <div className={styles.description__content}>
                        { 
                            editstate.at(index)?<input 
                                type="text" 
                                name="description"
                                onChange={(e)=>SetformState({...formState, description:e.target.value})}
                            />:
                            <input 
                            name="description"
                            type="text" 
                            value={item.description} 
                            disabled/> 
                        }
                    </div>:null
                    }
                        <div className={styles.active__button}>
                             <div className={styles.button__edit}>
                                <Boutonwhite onClick={(e)=>ActiveEdit(e, index)} icon={faEdit} name="editer"/>
                             </div>
                             <div className={styles.button__delete}>
                                <Boutonwhite icon={faTrashAlt} name="supprimer"
                                    onClick={e=>DeleteStatut(item.id, props.type)}
                                /> 
                            </div>
                            <div className={styles.button__valider}>
                                {editstate.at(index)?<Boutonwhite onClick={(e)=>UpdateStatut(e, item.id, props.type)} icon={faCheck} name="valider"/>:null}
                            </div>
                            
                            </div>
                    </div>
                )
                }
            </div>:null
        }

    </form>
    </div>
  )
}
