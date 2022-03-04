import React from 'react';
import { MemberCard, ProjectCard, ServiceCard } from '../common';

class MainStructureComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {}
  render() {
    let props = this.props;
    return (
      <div className="main-content-parent">
        <div className="about-us-container ">
          {props.image ? (
            <div className="image-container">
              <img src={props.image} alt="text" />
            </div>
          ) : null}

          <div className="desc-container">
            <div className='ml20'>
              {props.title ? (
                <div className="title-underline">
                  <div>
                    <span className="title">{props.title}</span>
                  </div>

                  <div className="dot-line-container">
                    <div className="dot"></div>
                    <div className="line"></div>
                  </div>
                </div>
              ) : null}
            </div>

            {props.description && <span>{props.description}</span>}
          </div>
        </div>

        {props.services ? (
          <div className="service-cards-container">
            {props.services.map(service => {
              return <ServiceCard service={service} />;
            })}
          </div>
        ) : null}

        {props.members ? (
          <div className="service-cards-container">
            {props.members.map(member => {
              return <MemberCard service={member} />;
            })}
          </div>
        ) : null}

        {props.projects ? (
          <div className="project-cards-container">
            {props.projects.map(project => {
              return <ProjectCard project={project} />;
            })}
          </div>
        ) : null}

        
      </div>
    );
  }
}

export default MainStructureComponent;
