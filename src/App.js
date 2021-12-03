import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import BlogOverviewPage from "./pages/Overview";
import BlogPostsPage from "./pages/BlogPosts";

import {
    BrowserRouter as Router,
    Switch,
    Route, NavLink,
} from "react-router-dom";
import {useHistory} from "react-router-dom";


// [x]   STAPPENPLAN PAGINA COMPONENT MAKEN
// [x] - directory genaamd "pages"
// [x] - JavaScript bestandje maken voor iedere pagina (met Hoofdletter!)
// [x] - Supertip: typ in ieder bestand rsc (tab) om een boilerplate component te maken
// [x] - Test je pagina componenten door ze allemaal in App.js te importeren en onder elkaar weer te geven
// [] STAPPENPLAN ROUTING IMPLEMENTEREN
// [x] - npm install react-router-dom@5.1.2
// [x] BrowserRouter as Router importeren uit react-router-dom (index.js)
// [x] Switch, Route importeren uit react-router-dom (App.js)
// [] Implementeren:
// [x] 1. Routing "bedenken" door het Switch en Route component te gebruiken in App.js
// [x] 2. Maak een navigatiebalk met de links naar de paginas (netjes om ul te gebruiken!) Zorg dat deze op iedere pagina te zien is. Gebruik hiervoor het NavLink component en zoek op hoe het ookalweer werkte met die actieve CSS class
// [x] 3. Maak op de Login pagina een knop "Inloggen". Wanneer de gebruiker daarop klikt, gebruik je useHistory om de gebruiker door te sturen naar BlogOverzichtPagina
// [] BLOGPOST OVERZICHT PAGINA MAKEN:
// [x] 1. Maak eerst met eigen-bedachte tekst een structuur voor de overzichtspagina (wat moet er allemaal op? Maak ook alvast een Link-component, etc. )
// [x] 2. Importeer de "echte" posts zoals beschreven in het voorbeeld
// [] 3. CHECK YOURSELF BEFORE YOU WRECK YOURSELF! Console log de data en bekijk wat het is? Array? Object? Object met Arrays of andersom?
// [] 4. Is er een handige manier om al die data niet handmatig uit te hoeven schrijven?
// [] 5. Zorg ervoor dat er een link en titel voor iedere post wordt gegenereerd
function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)
  const [isAuthenticated, toggleIsAuthenticated ] = useState(false);
// toggleIsAuthenticated(true) Deze is voor 2de opdracht nodig

  const history=useHistory()
  function signOut() {
      toggleIsAuthenticated(false)
      history.push("/")
  }

  return (
    <div>
        <nav>
            <ul className="nav-container">
                <li><NavLink to="/" exact activeClassName="active-link">Home</NavLink></li>
                <li><NavLink to="/login"  activeClassName="active-link">Login</NavLink></li>
                {isAuthenticated ? <>
                    <li><NavLink to="/blogposts" exact activeClassname="active-link">Blogpost</NavLink></li>
                    <button type="button" onClick={signOut}>Uitloggen</button>
                    </>
                    : ""}
            </ul>
        </nav>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/login">
                <LoginPage toggleAuth={isAuthenticated} toggleAuth={toggleIsAuthenticated}/>
            </Route>
            <Route path="/blogposts/:blogId">
                <BlogOverviewPage />
            </Route>
             <Route>
                <BlogPostsPage exact path="/blogposts"/>
            </Route>

        </Switch>
    </div>
  );
}




export default App;
