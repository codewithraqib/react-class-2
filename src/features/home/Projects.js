import React from 'react';
import { ProjectCard } from '../common';

class Projects extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          name: 'EaseMySchool',
          desc: 'A School Management System',
        },
        {
          name: 'SKUAST',
          desc: 'Farmer Farm Management',
        },
        {
          name: 'Dolphin Website',
          desc: 'A School Website',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          additionalData: 'kjhgfdcghjkhgfghjkjhgf kjhgfdghjkjhgfghjkjhgf',
        },
        {
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
        },
      ],
    };
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="ind-project-container">
          {this.state.projects &&
            this.state.projects.map(project => <ProjectCard project={project} clickable={true} />)}
        </div>
      </div>
    );
  }
}

export default Projects;
