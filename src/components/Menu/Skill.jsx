import React from "react";
import ReactIcons from '/React-icon.svg'
import BootstrapIcons from '/Bootstrap_logo.svg'
import SupabaseIcons from '/Supabase_logo.svg'

const Skill = () => {
  return (
    <>
      <div className="head">
        <div className="title" data-aos="fade-left">
          <img
            src="https://html.vikinglab.agency/ovro/assets/img/icons/sublogo1.svg"
            alt="Small-Logo"
            />
          <span>My Skill</span>
        </div>
        <div className="subtitle h1" data-aos="fade-left">
        The Tools Behind
          <p>
          Exceptional <span>Design</span>
          </p>
        </div>
        <div className="row g-4 ">
            <SkillCard image={ReactIcons} percentage={96} name={`React`} />
            <SkillCard image={BootstrapIcons} percentage={90} name={`Bootstrap`} />
            <SkillCard image={`/Git_logo.svg`} percentage={89} name={`Git`} />
            <SkillCard image={`/JavaScript_logo.svg`} percentage={85} name={`JavaScript`} />
            <SkillCard image={`/Typescript_logo_2020.svg`} percentage={85} name={`TypeScript`} />
            <SkillCard image={`/Redux_logo.svg`} percentage={92} name={`Redux`} />
            <SkillCard image={`/Node_js.svg`} percentage={85} name={`Node.js`} />
            <SkillCard image={SupabaseIcons} percentage={83} name={`Supabase`} />
            <SkillCard image={`/oracle-svgrepo-com.svg`} percentage={85} name={`Oracle SQL`} />
            
        </div>
        
      </div>
    </>
  );
};

export default Skill;

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