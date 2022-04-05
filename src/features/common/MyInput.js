import React from 'react';

class MyInput extends React.PureComponent {
  //   onChange = e => {
  //     this.props.onChange(e.target.value);
  //   };

  render() {
    let props = this.props;
    return (
      <div className="input-container" style={{ width: props.width && props.width }}>
        <div className="label-container">
          <span>{props.label}</span>
        </div>

        <div className="input-container-inner">
          <input
            type={props.type}
            placeholder={props.placeholder}
            // onChange={e => this.onChange(e)}
            onChange={e => props.onChange(e.target.value)}
            value={props.value}
            onBlur={e => props.onBlur(e.target.value)}
          />
        </div>

        <div className="error">
          <span>{props.error}</span>
        </div>
      </div>
    );
  }
}

export default MyInput;
