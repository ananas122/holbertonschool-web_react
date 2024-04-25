import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Notifications from '../Notifications/Notifications.js';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
  // Ajout de propTypes pour la propriété logOut
  static propTypes = {
    logOut: PropTypes.func, // La prop logOut doit être de type fonction
  };

  // Définition de defaultProps pour fournir une fonction vide par défaut à logOut
  static defaultProps = {
    logOut: () => { }, // Fonction vide par défaut pour la prop logOut
  };

  // Méthode appelée lorsque le composant est monté
  componentDidMount() {
    // Ajout d'un événement pour écouter les touches clavier pressées
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Méthode appelée lorsque le composant est démonté
  componentWillUnmount() {
    // Suppression de l'événement lors du démontage du composant
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Méthode pour gérer l'événement de pression des touches clavier
  handleKeyDown = (event) => {
    // Vérification si les touches contrôle et h sont pressées simultanément
    if (event.ctrlKey && event.key === 'h') {
      // Affichage d'une alerte
      alert('Logging you out');
      // Appel de la fonction logOut passée en tant que prop
      this.props.logOut();
    }
  };

  // Méthode render() pour définir le rendu du composant
  render() {
    const { isLoggedIn } = this.props;

    // Déclaration des constantes listNotifications et listCourses
    let i = 0;
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

export default App;
