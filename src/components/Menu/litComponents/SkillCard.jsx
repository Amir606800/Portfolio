import React from 'react'

const SkillCard = (props) => {
  return (
    <div data-aos="zoom-out" className="col-lg-4 col-md-6 col-12 ">
        <div className="card p-3 gap-2 d-flex flex-column justify-content-center align-items-center">
        <div className="card-image bg-gray-600 p-3"> <img src={props.image} alt={props.name} /></div>
        <div className="card-title fs-2 fw-bold" >{props.percentage}%</div>
        <div className="card-subtitle fs-5">{props.name}</div>
        </div>
    </div>
  )
}

export default SkillCard