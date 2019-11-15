import React from "react";
import confLogo from '../images/descarga.svg';
import './style/Badge.css';


class Badge extends React.Component {
  render() {
   
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className="Badge__section-name ">
        <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar" />
          <h1>{this.props.firstName}<br/>{this.props.lastName}</h1>
        </div>
        <div className="Badge__section-info">
            <div>{this.props.jobTitle}</div>
            <div>{this.props.twitter}</div>
        </div>
        <div className="Badge__footer">
            #automatization
        </div>
      </div>
    );
  }
}

export default Badge;
