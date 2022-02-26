import React from 'react';

class ContactSection extends React.PureComponent {
  render() {
    return (
      <div className="contact-section-container">
        <div className="title">
          <span>Contact Us</span>
        </div>

        <div className="desc">
          <span>
            If you want to discuss and plan your business goals, Awesome! We love supporting our
            customers in differnet areas and guide them appropriatly to boost thei Business.
          </span>
        </div>

        <div className="form-header">
          <span className="sub-title"> Send your query</span>
        </div>

        <div className="contact-form">
          <div className="numbers">
            <span>+91 9906099060</span>
            <span>+91 9797097970</span>
            <span>+91 9419094190</span>
          </div>
          <div className="form">
            <form>
              <input type="text" placeholder="Enter Your Name" />
              <input type="text" placeholder="Enter Your Number" />
              <input type="text" placeholder="Enter Comment" />

              <input className="submit" type="submit" />
            </form>
          </div>
          <div className="address">
            <span>2nd Floor | Al Burj complex | Opposite Govt. Boys Degree College Pulwama</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
