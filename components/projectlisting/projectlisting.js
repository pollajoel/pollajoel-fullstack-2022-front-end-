import React, {useState, useEffect} from 'react'
import Projectcards from '../projectcards/projectcards';
import styles from './projectlisting.module.scss';
import { DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd';
import Loader from '../Loader/loader';
import {useMutation} from '@apollo/client'
import {UPDATE_PROJECT} from '../../graphql/mutation'


export default function Projectlisting(props) {

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

  const update = async(projectId, newStatutId, currentProject)=>{
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
        const init = {}
        var tab = {}
        for( let i=0; i<allstat.length; i++ ) {
          tab[allstat[i].id] ={
            name:allstat[i].name,
            status_color:allstat[i].color,
            items: []
          }
        }

        for( let i =0; i< allproj.length; i++) {
          tab[allproj[i].statutId]?.items?.push({
            name:allproj[i].title,
            id:allproj[i].id+"",
            start_date: allproj[i].start_date,
            end_date: allproj[i].end_date,
            statutId: allproj[i].statutId,
            userId: allproj[i].userId
          })
        }
       if( tab ){ 
          setColumns( tab )
          setwinReady(true)
       }
       
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
            update(removed.id, destination.droppableId, removed) ;

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
    const [editLink, seteditLink] = useState(props.editLink);
    
  if(!columns ) return (<Loader/>)
  if( columns )
  return (
    <div>
      {winReady?<div className={styles.item__title}>
        { 
        statuts.map((item, index)=><div key={index} className={styles.title}>{item.name}</div>)
        }
      </div>:null
    }


    <div className={styles.projects__container}>
      {
        winReady?<DragDropContext onDragEnd={result=>onDragEnd(result, columns, setColumns )}>
            { 
              
              Object.entries(columns).map(([id, column])=>{
                var columColor = column.status_color;
              return (<div key={id}>
              <Droppable droppableId={id.toString()} key={id}> 
              { (provided, snapshot) => {
                  return (<div
                        {...provided.droppableProps}  
                        ref={provided.innerRef}
                        style={{ background:snapshot.isDraggingOver? 'lightblue':'lightgray',
                            
                            width: '200px',
                            height: 'auto',
                            border: '1px solid #fff',
                            padding: '6px',
                            minheight:'950px'
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
                                     styled={{
                                       userSelect: 'none',
                                       margin: '0 0 8px 0',
                                       backgroundColor: snapshot.isDragging?'#263B4A':'#456C86',
                                       color: '#000',
                                       ...provided.draggableProps.style
                                     }}
                                   >  
                                   {
                                    <Projectcards item={item}  statutstate={columColor}  editLink={editLink}/>
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
