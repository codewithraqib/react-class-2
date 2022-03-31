import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class MyModal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return this.props.showModal ? (
      <div className="modal-parent">
        <Modal.Dialog>
          <Modal.Header closeButton onClick={this.props.closeModalDemo}>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <img src={this.props.image && this.props.image.url} alt="" />
          </Modal.Body>

          {/* <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer> */}
        </Modal.Dialog>
      </div>
    ) : null;
  }
}

export default MyModal;
