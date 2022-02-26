import React from 'react';

class ContactSection extends React.PureComponent {
  render() {
    return (
      <div className="contact-section-container">
        <div className="title">
          <span>Conatct Us</span>
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
            <span>919393939933</span>
            <span>8876567654567</span>
            <span>8765435678765</span>
          </div>
          <div className="form">
            <form>
              <input type="text" placeholder="enter name" />
              <input type="text" placeholder="enter phone number" />
              <input type="text" placeholder="enter comment" />

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
