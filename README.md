# MODAL_FORM

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/semect_input.svg)](https://www.npmjs.com/package/semect_input) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save semect_input
```

## Usage

```jsx
import React, { Component } from 'react'

import Modal from 'MODAL_FORM'
import 'modal_form/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

 Fonctionnalités :

    Le composant utilise la fonction "useNavigate" de react-router-dom pour obtenir une fonction de navigation.
    Lorsque la prop "isOpen" est vraie, le composant affiche la fenêtre modale.
    Lorsque la fenêtre modale est ouverte, le message "salut" est affiché dans la console.
    La fenêtre modale contient un élément "div" avec la classe "modal" qui est affiché ou masqué en fonction de la prop "isOpen".
    À l'intérieur de la fenêtre modale, il y a un élément "div" avec la classe "modal-content" qui contient le contenu de la fenêtre.
    Le contenu de la fenêtre modale comprend un titre avec la classe "modal-header" et le texte "HRNET".
    Il y a également un paragraphe avec le texte "Nouvelle utilisateur crée !!".
    Enfin, il y a un bouton avec la classe "modal-button" qui, lorsqu'il est cliqué, déclenche la fonction de navigation pour rediriger vers la page "./Employe"

## License

MIT © [kenuhn](https://github.com/kenuhn)
