import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'; // Import de PropTypes

import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  // Méthode render() pour définir le rendu du composant
  render() {
    // Utilisation de this.props pour accéder aux props
    const { isLoggedIn } = this.props;

    // Déclaration des constantes listNotifications et listCourses
    const i = 0;
    const listNotifications = [
      {
        id: i++,
        type: "default",
        value: "New course available",
      },
      {
        id: i++,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: i++,
        type: "urgent",
        html: { __html: getLatestNotification() },
      }
    ];

    const listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    // Rendu du composant avec JSX
    return (
      <Fragment>
        <div className="App">
          <div className="upperside">
            <Notifications listNotifications={listNotifications} />
            <Header />
          </div>
          {isLoggedIn === false && <Login />}
          {isLoggedIn === true && <CourseList listCourses={listCourses} />}
          <Footer />
        </div>
      </Fragment>
    );
  }
}

// Définition de propTypes pour valider les props
App.propTypes = {
  isLoggedIn: PropTypes.bool, // La prop isLoggedIn doit être de type booléen
};

// Définition de defaultProps pour fournir une valeur par défaut à la prop
App.defaultProps = {
  isLoggedIn: false, // Valeur par défaut pour la prop isLoggedIn
};

export default App;
