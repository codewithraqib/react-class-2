import React from 'react';
import { ProjectCard } from '../common';

class Projects extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        {
          id: 0,
          name: 'EaseMySchool',
          desc: 'A School Management System',
          active: false,
          link: 'http://www.easemyschool.com/',
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 1,
          name: 'SKUAST',
          desc: 'Farmer Farm Management',
          active: false,
          link: 'https://play.google.com/store/apps/details?id=com.apple.doc',
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 2,
          name: 'Dolphin Website',
          desc: 'A School Website',
          active: false,
          link: 'https://dolphinschool.edu.in/',
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 3,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          active: false,
          details:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum',
        },
        {
          id: 4,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          active: false,
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          details:
            "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          id: 5,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          active: false,
          details:
            "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        },
        {
          id: 6,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          active: false,
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 7,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          active: false,
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
          id: 8,
          name: 'Cheezymezy',
          desc: 'Restaurant Aggerigator System',
          link: 'https://play.google.com/store/apps/details?id=apps.bracecodes.cheezymezy',
          active: false,
          details:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
      ],
    };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   window.scrollTo(0, 0);
    // }, 2000);

    window.scrollTo(0, 0);
  }

  cardClicked = card => {
    console.log('Card passed is-----', card);

    let newProjects = [];

    this.state.projects.map(project => {
      if (project.id == card.id) {
        newProjects.push({ ...project, active: !project.active });
      } else {
        newProjects.push({ ...project, active: false });
      }
    });

    this.setState({ projects: newProjects });
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="ind-project-container">
          {this.state.projects &&
            this.state.projects.map(project => (
              <ProjectCard project={project} clickable={true} cardClicked={this.cardClicked} />
            ))}
        </div>
      </div>
    );
  }
}

export default Projects;
