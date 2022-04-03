import React, {useEffect, useState} from 'react'
import {ScheduleComponent, Day, Week, Month, Agenda, Inject,
EventsettingsModel} from '@syncfusion/ej2-react-schedule'
import Loader from '../../components/Loader/loader'


export default function Scheduler(props){

    EventsettingsModel={
        dataSource: props.events
    }
    const [windowsReady, setWindowsReady]= useState(false);

    useEffect(() => {
        setWindowsReady(true)
    },[])

    
    return(
        <div>
            {windowsReady?<ScheduleComponent currentView="Month"
                eventSettings={EventsettingsModel}
            >
                <Inject services={[Day, Week,Month, Agenda]}/>
            </ScheduleComponent>:<div>Is Loading...</div>
            }
        </div>
    )
    
}


