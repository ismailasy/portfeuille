import React from "react"
import {VerticalTimeline ,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from  "@material-ui/icons/School";
import WorkIcon  from  "@material-ui/icons/Work"
import "../styles/Experience.css"
function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2020 - 2022"
        iconStyle={{background :"#3e497a" ,color :"#fff"}}
        icon ={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
                Université Alioune DIOP de Bambey
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Master 
          </h4>
          <p> systèmes et réseaux</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        date="2016 - 2019"
        iconStyle={{background :"#3e497a" ,color :"#fff"}}
        icon ={<SchoolIcon/>}>
          <h3 className="vertical-timeline-element-title">
                Université Alioune DIOP de Bambey
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Licence 
          </h4>
          <p> Administration et maintenance de réseaux téléinformatiques</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="janvier 2019 - Avril 2019"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Superviseur Réseaux - ADIE
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Dakar , Sénégal
          </h4>
          <p>Detection des pannes sur le reseaux de transmission et alerter les equipes de terrain</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience;