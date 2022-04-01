import React ,{Component} from 'react'
import 'dhtmlx-scheduler';
import 'dhtmlx-scheduler/codebase/dhtmlxscheduler_material.css';




export default class Scheduler extends Component {

    constructor(props){
        super(props)
        if (typeof window === 'undefined') {
            global.window = {}
        }
    }
    componentDidMount() {
        
        const  scheduler = window.scheduler;
        scheduler.skin = 'material';
        scheduler.config.header = [
            'day',
            'week',
            'month',
            'date',
            'prev',
            'today',
            'next'
        ];
 
        const { events } = this.props;
        scheduler.init(this.schedulerContainer, new Date(2020, 5, 10));
        scheduler.clearAll();
        scheduler.parse(events);
    }
 
    render() {
        return (
            <div
                ref={ (input) => { this.schedulerContainer = input } }
                style={ { width: 'width: 200px', height: '100vh' } }
            ></div>
       );
    }
}