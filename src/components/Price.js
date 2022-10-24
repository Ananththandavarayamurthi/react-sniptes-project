  
import React from 'react'

function Price(props) {
  
  return (
    <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.value.head}</h5>
            <h6 className="card-price text-center">${props.value.price}<span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
              <li className={props.value.userEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.userEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.user}</li>
              <li className={props.value.storageEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.storageEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.storage}</li>
              <li className={props.value.projectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.projectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.projects}</li>
              <li className={props.value.accessEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.accessEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.access}</li>
              <li className={props.value.privateprojectsEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.privateprojectsEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.privateprojects}</li>
              <li className={props.value.supportEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.supportEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.support}</li>
              <li className={props.value.domainEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.domainEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.domain}</li>
              <li className={props.value.statusEnabler?"":"text-muted"}><span className="fa-li"><i className={props.value.statusEnabler?"fas fa-check":"fas fa-times"}></i></span>{props.value.status }</li>
            </ul>
            <div className="d-grid"> 
              <a href="javascript(void)" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>  
      </div> 
  )
}

export default Price