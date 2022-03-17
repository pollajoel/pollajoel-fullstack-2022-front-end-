import React from 'react'
import InputForm from '../form/inputForm/input'
import {faCalendarPlus, faProjectDiagram} from '@fortawesome/free-solid-svg-icons';
import TextareaForm from '../form/textarea/textareaForm';
export default function ditprojectsForm(props) {
  return (
    <div>
        <div>{props.title}</div>
        <div>
        <form>
            <div>
                <InputForm 
                
                name="title"
                error={true}
                id="title"
                placeholder="intitulé du projet"
                icon={faProjectDiagram}
               
                />
            </div>
            <div>
                <InputForm name="start_date"
                error={true}
                icon={faCalendarPlus}
                placeholder="date de début"
                />
            </div>

            <div>
                <InputForm name="end_date"
                error={true}
                icon={faCalendarPlus}
                placeholder="date de fin"
                />
            </div>
            <div>
                <TextareaForm
                    decription="description du projet"
                    rows="4"
                    cols="40"
                    description="brève description du projet"
                    value={props.value | "brève description du projet"}
                />
            </div>
        </form>
        </div>
    </div>
  )
}
