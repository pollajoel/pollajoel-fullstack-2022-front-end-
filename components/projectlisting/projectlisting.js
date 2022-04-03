import React, {useState, useEffect} from 'react'
import Projectcards from '../projectcards/projectcards';
import styles from './projectlisting.module.scss';
import { DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd';
import Loader from '../Loader/loader';
import {useMutation} from '@apollo/client'
import {UPDATE_PROJECT, UPDATE_TASK} from '../../graphql/mutation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

export default function Projectlisting({
      editLink,
      onClick,
      projectID,
      tasks, 
      StatuId,
      projectsdata,
      StatutId,
      SetstatutId,
      setIsOpen
}) {

  function OnclickADDdata(event, columm, index){
    SetstatutId(index)
    setIsOpen(true)
  }

  function getStyle(style, snapshot) {
    if (!snapshot.isDropAnimating) {
      return style;
    }
    const { moveTo, curve, duration } = snapshot.dropAnimation;
    // move to the right spot
    const translate = `translate(${moveTo.x}px, ${moveTo.y}px)`;
    // add a bit of turn for fun
    const rotate = 'scale(0.9)';
  
    // patching the existing style
    return {
      ...style,
      transform: `${translate} ${rotate}`,
      // slowing down the drop because we can
      transition: `all ${curve} ${duration + 0.5}s`,
    };
  }



  const [updateTask] = useMutation(UPDATE_TASK, {
    onCompleted: (data)=>{},
    onError: (errors)=>{
      console.log( errors )
    }
  })

  const [UpdateStatus]=useMutation(UPDATE_PROJECT,{
    onCompleted: (data)=>{
        //console.log( "Token: "+data )
        //localStorage.setItem("Token",data.authentification.token )
        //router.push("/")
    },
    onError: (errors)=>{
        console.log( errors )
    }
})


 const updateTaskContain = async(taskId, newtaskId, currentTask)=>
{
  const projectId = currentTask?.projectId
 
  await updateTask({
      variables:{id:Number.parseInt(taskId),
        updatetaskInput:{ 
          projectId: Number.parseInt(projectId),
          description: currentTask?.description,
          statutId: Number.parseInt(newtaskId),
          name: currentTask?.name
        }
      },
      context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
  })
  
     
    
}

  const update = async(projectId, newStatutId, currentProject)=>{
    console.log( currentProject )
      await UpdateStatus({
        variables:{id:Number.parseInt(projectId),projectInputUpdate:{
          start_date: currentProject.start_date,
          end_date: currentProject.end_date,
          statutId: Number.parseInt(newStatutId),
          title: currentProject.name,
          userId: currentProject.userId
        
        }},
        context:{headers:{authorization:typeof window !== 'undefined'?localStorage.getItem("Token"):""}}
      })
  }

 const [statuts, setAstatuts] = useState([])
  const [winReady, setwinReady] = useState(false);
      useEffect(() => {
        LoadData();
        }, []);

      const LoadData = async()=>{

        const IsprojectTask = projectsdata?.projectsTaks 
        var myHeaders = new Headers();
        myHeaders.append("authorization", `${typeof window !== 'undefined'?localStorage.getItem("Token"):""}`);
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };
        const res = await fetch("http://localhost:4000/api/v1/projects", requestOptions)
        const Allprojects = await res.text()
        const resstat = await fetch("http://localhost:4000/api/v1/statuts", requestOptions)
        const allstatuts = await resstat.text()
        const allstat = JSON.parse(allstatuts)
        setAstatuts( allstat )
        const allproj = JSON.parse(Allprojects);
        var tab = {}
        for( let i=0; i<allstat.length; i++ ) {
          tab[allstat[i].id] ={
            name:allstat[i].name,
            statutId:allstat[i].id,
            status_color:allstat[i].color,
            items: []
          }
        }

        if( !IsprojectTask ){
        for( let i =0; i< allproj.length; i++) {
          tab[allproj[i].statutId]?.items?.push({
            name:allproj[i].title,
            id:allproj[i].id+"",
            start_date: allproj[i].start_date,
            end_date: allproj[i].end_date,
            statutId: allproj[i].statutId,
            userId: allproj[i].userId,
            description: allproj[i].description,
            statut: allproj[i].statut,
            user: allproj[i].user
          })
        }
      }

      if( tab && !IsprojectTask){ 
          setColumns( tab  )  
       }else{
         
        for( let i =0; i< IsprojectTask.length; i++) {
          console.log( "pdate.....")
          tab[IsprojectTask[i].statut.id]?.items?.push({
            name:IsprojectTask[i].name,
            id:IsprojectTask[i].id+"",
            start_date: IsprojectTask[i].start_date,
            end_date: IsprojectTask[i].end_date,
            statutId: IsprojectTask[i].statut.id,
            userId: IsprojectTask[i].user.id,
            projectId:IsprojectTask[i].projectId,
            description: IsprojectTask[i].description,
            statut: IsprojectTask[i].statut,
            user: IsprojectTask[i].user
          })
        }

        setColumns( tab  ) 
       }

       setwinReady(true)
       
      }
  
        
        const onDragEnd = (result, columns, setColumns) => {
          if (!result.destination) return;
          const { source, destination } = result;
        
          if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1); //projet dont on voudrais changer le statut
            destItems.splice(destination.index, 0, removed);
            // removed: tache ou projet selctionné
            // destination.droppableId = nouveau statut

            SetstatutId( destination.droppableId )
            const IsprojectTask = projectsdata?.projectsTaks;
            if( ! IsprojectTask )
              update(removed.id, destination.droppableId, removed);
            else{
              updateTaskContain(removed.id, destination.droppableId, removed);
            }
            console.log( removed)

            setColumns({
              ...columns,
              [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
              },
              [destination.droppableId]: {
                ...destColumn,
                items: destItems
              }
            });
          } else {
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
              ...columns,
              [source.droppableId]: {
                ...column,
                items: copiedItems
              }
            });
          }
        };

    const [columns, setColumns] = useState({});
    const [EditLink, seteditLink] = useState(editLink);
    
  if(!columns ) return (<Loader/>)
  if( columns )
  return (
    <div>
    <div className={styles.projects__container}>
      {
        winReady?<DragDropContext onDragEnd={result=>onDragEnd(result, columns, setColumns )}>
            { 
              Object.entries(columns).map(([id, column])=>{
              var columColor = column.status_color;
              return (<div key={id}>
                <div className={styles.Col__title}>
                  <div>{column.name}</div>
                  <div><FontAwesomeIcon icon={faPlus} 
                  onClick={(event) => OnclickADDdata(event, columns, id)}/></div>
                </div>
              <Droppable droppableId={id.toString()} key={id}> 
              { (provided, snapshot) => {
                  return (<div
                        {...provided.droppableProps}  
                        ref={provided.innerRef}
                        style={{ background:snapshot.isDraggingOver? 'lightblue':'#FFF',
                            width: '200px',
                            height: 'auto',
                            borderRight: '2px solid #fff',
                            padding: '6px',
                            minheight:'100px'
                      }}
                    >

                    { column.items.map((item, index) =>{
                    
                    return(
                   
                    <Draggable 
                            key={item.id} 
                             draggableId={item.id}
                             index={index}>
                        {(provided, snapshot) => (  
                                   <div  
                                     ref={provided.innerRef}  
                                     {...provided.draggableProps}  
                                     {...provided.dragHandleProps}
                                     isDragging={snapshot.isDragging && !snapshot.isDropAnimating} 
                                     style={getStyle(provided.draggableProps.style, snapshot)}
  
                                   >  
                                   {
                                    <Projectcards item={item}  statutstate={columColor}  editLink={EditLink}
                                      isTasks={projectsdata?.projectsTaks}
                                    
                                    />
                                   }
                                   
                                   </div>  
                                )} 
                        </Draggable>)
                  }
                    )}
                     {provided.placeholder}
                  </div>)
                 
                }
              } 
                </Droppable>
                
                </div>)
              })
            }  
        </DragDropContext>:null
      }
    </div>
    </div>)
}
