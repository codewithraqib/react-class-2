import React from 'react';
import HeroSection from '../common/HeroSection';
import MainStructureComponent from './MainStructureComponent';

const aboutUsContent =
  'Bracecodes Software Solutions is a company established in November 2016. After getting featured in many spheres of Web and Mobile Development we decided to register as Private Limited Company in Jan 2019 and we are presently a Private Limited Comapny from March 2019. We design Dynamic Websites, Standalone Customized Desktop Apps, Mobile Apps for both Platforms - Android and IOS. We offer a Powerful tool for School Management called Ease My School(EMS) which gives you the power of efficent communication with parents and includes all the neccessary feature and some of the features are- attendance, Bus Tracking, Result Declaration, SMS Service integration, Fee Module, Class Tests, Notifications and much more... We also teach Certification courses - C, C++, Java, PHP, JavaScript. We are masters in teaching Android Development as a Job Oriented Course. We also offer some services - Branding and Promotion of your business Unit SMS Service to communicate with your clients.';

class WelcomePage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      services: [
        {
          icon: 'computer',
          name: 'Website Development',
          desc: 'We Develop Custom Websites - Simple Portfolio to Complex Ecommerce Websites',
        },
        {
          icon: 'mobile',
          name: 'Mobile App Development',
          desc: 'We Develop Custom Complex Mobile Apps for both Platforms - Android and IOS',
        },
        {
          icon: 'book',
          name: 'Certification Courses',
          desc:
            'We Teach C | C++ | JAVA | PHP | JavaScript | Android Development | Flutter Development',
        },
        {
          icon: 'chart',
          name: 'Services',
          desc:
            'We Offer Custom Requiremnt Softwares- Inventor, Library etc | Branding and Promotion of Business Units | SMS Service',
        },
      ],
      members: [
        {
          name: 'Sajad Ahmad',
          desc: 'Frontend Developer',
        },
        {
          name: 'Raqib',
          desc: 'Fronend Developer',
        },
        {
          name: 'Junaid',
          desc: 'QA',
        },
        {
          name: 'Tanveer',
          desc: 'Full Stack Developer',
        },
      ],

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
      ],
    };
  }
  componentDidMount() {
    console.log('Props in welcome page are----', this.props);
  }
  render() {
    return (
      <div className="home-welcome-page">
        <HeroSection backImage="images/hero-back.jpg" />

        <div className="content-wrapper rest-body">
          <MainStructureComponent
            title="About us"
            image={'images/hero-back.jpg'}
            description={aboutUsContent}
          />

          <MainStructureComponent
            title="Services Offered"
            description={
              'We offer a lot of services in the field of IT which satisfy our customers and help our customers to grow.'
            }
            services={this.state.services}
            // image={'images/hero-back.jpg'}
          />

          <MainStructureComponent
            title="Our Team"
            description={
              'We are 4 members in a team working in dynamic and different spheres of development.'
            }
            // image={'images/hero-back.jpg'}
            members={this.state.members}
          />

          <MainStructureComponent
            title="Our Projects | Products
"
            description={
              'We have developed a lot of products for ourselves and more for clients in which some prominent ones are -'
            }
            // image={'images/hero-back.jpg'}
            projects={this.state.projects}
          />
        </div>

        {/* <div onClick={() => this.props.history.push('/projects')}>Click me</div> */}
      </div>
    );
  }
}

export default WelcomePage;
