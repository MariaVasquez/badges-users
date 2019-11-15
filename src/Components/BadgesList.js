import React from "react";
import "./style/BadgeList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

class BadgesList extends React.Component {
  render() {
    return (
      <div className="BadgesList">
        <ul className="list-unstyled">
          {this.props.badges.map(badges => {
            return (
              <li key={badges.id} className="BadgesListItem">
                <img
                  className="BadgesListItem__avatar"
                  src={badges.avatarUrl}
                  alt="Avatar"
                />

                <div className="design_lis">
                  <strong>
                    {badges.firstName} {badges.lastName}
                  </strong>
                  <br />
                  <span style={{ color: "#00acee" }}>
                    <FontAwesomeIcon icon={faTwitter} /> @{badges.twitter}
                  </span>
                  <br />
                  {badges.jobTitle}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default BadgesList;
