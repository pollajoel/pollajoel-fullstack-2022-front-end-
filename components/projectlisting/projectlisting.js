import React, {useState, useEffect} from 'react'
import Projectcards from '../projectcards/projectcards';
import styles from './projectlisting.module.scss';
import { DragDropContext, Droppable , Draggable} from 'react-beautiful-dnd';
export default function Projectlisting(props) {
  const [winReady, setwinReady] = useState(false);
  

      useEffect(() => {
          setwinReady(true);
        }, []);
  
        
        const onDragEnd = (result, columns, setColumns) => {
          if (!result.destination) return;
          const { source, destination } = result;
        
          if (source.droppableId !== destination.droppableId) {
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
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

    const [columns, setColumns] = useState(props.statutLists);
    
  return (
    <div className={styles.projects__container}>
      {
        winReady?<DragDropContext onDragEnd={result=>onDragEnd(result, columns, setColumns )}>
            { 
              
              Object.entries(columns).map(([id, column])=>{
                var columColor = column.status_color;
              return (<div key={id}><div className={styles.title}>{column.name}</div>
              <Droppable droppableId={id.toString()} key={id}> 
              { (provided, snapshot) => {
                  return (<div
                        {...provided.droppableProps}  
                        ref={provided.innerRef}
                        style={{ background:snapshot.isDraggingOver? 'lightblue':'lightgray',
                            
                            width: '150px',
                            height: 'auto',
                            border: '2px solid #fff',
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
                                       color: '#fff',
                                       ...provided.draggableProps.style
                                     }}
                                   >  
                                   {
                                    <Projectcards item={item}  statutstate={columColor}/>
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
  )
}
