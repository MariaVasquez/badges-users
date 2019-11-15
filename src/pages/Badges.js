import React from "react";
import Navbar from "../Components/Nevbar";
import header from "../images/descarga.svg";
import "./style/Badges.css";
import BadgesList from "../Components/BadgesList";
import { Link } from "react-router-dom";

class Badges extends React.Component {
    state = {
        data:[
            {
                id: '1',
                firstName:'Christopher',
                lastName:'Restrepo',
                twitter: 'chris.restrepo',
                email:'chris@gmail.com',
                jobTitle: 'Ingeniero Electrico',
                avatarUrl: 'https://secure.gravatar.com/avatar/f86125349acaff0f904ac2ca8f77f70f?s=800&d=identicon'
            },
            {
                id: '2',
                firstName:'Daniela',
                lastName:'Vergara',
                twitter: 'daniela.vergara30',
                email:'dani@gamisl.com',
                jobTitle: 'Ingeniera Sistemas',
                avatarUrl: 'https://secure.gravatar.com/avatar/f86125349acaff0f904ac2ca8f77f70f?s=800&d=identicon'
            },
            {
                id: '3',
                firstName:'Maria',
                lastName:'Vasquez',
                twitter: 'mm.vasquez',
                email:'maria@gmail.com',
                jobTitle: 'Inegniera Sistemas',
                avatarUrl: 'https://secure.gravatar.com/avatar/f86125349acaff0f904ac2ca8f77f70f?s=800&d=identicon'
            }
        ]
    }
  render() {
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges_conf-logo" src={header} alt="Logo" />
            </div>
          </div>
        </div>

        <div className="Badges__container">
            <div className="Badges__buttons">
                <Link to="/badges/new" className="btn btn-primary">Add</Link>
            </div>

            <div className="Badges__list">
                <div className="Badges__container">
                    <BadgesList badges={this.state.data}></BadgesList>
                </div>
            </div>

        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
