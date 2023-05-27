# Composant Modal React
Un composant Modal React personnalisable et réutilisable qui peut être utilisé pour afficher des messages informatifs ou solliciter des actions de l'utilisateur. Ce composant offre une façon simple et élégante d'afficher une boîte de dialogue modale avec un message facultatif et un bouton pour l'interaction de l'utilisateur.

# Installation
Vous pouvez installer le composant Modal à partir de npm en utilisant la commande suivante :

bash
Copy code
npm install modal-react-component
Utilisation
Pour utiliser le composant Modal dans votre application React, importez-le et incluez-le dans votre code comme indiqué ci-dessous :

```jsx
Copy code
import Modal from 'modal-react-component';

const VotreComposant = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
            <button onClick={handleOpenModal}>Ouvrir la modal</button>
            <Modal isOpen={isOpen} onClose={handleCloseModal}>
                <h3 className="modal-header">HRNET</h3>
                <p>Nouvel utilisateur créé !</p>
                <button onClick={handleCloseModal}>OK</button>
            </Modal>
        </div>
    );
};

export default VotreComposant;
```

Dans l'exemple ci-dessus, un composant Modal est rendu conditionnellement en fonction de la valeur de l'état isOpen. Lorsque le bouton "Ouvrir la modal" est cliqué, l'état isOpen est défini sur true et la modal est affichée. En cliquant sur le bouton "OK" ou en cliquant à l'extérieur de la modal, la fonction de rappel onClose est déclenchée, ce qui définit l'état isOpen sur false et masque la modal.

# Props
Le composant Modal accepte les props suivantes :

isOpen (boolean, requis) : Spécifie si la modal est ouverte ou fermée.
onClose (function, requis) : Fonction de rappel à appeler lorsque la modal est fermée.
children (élément React, requis) : Le contenu à afficher à l'intérieur de la boîte de dialogue modale.
Personnalisation des styles
Le composant Modal peut être stylisé en modifiant les classes CSS utilisées dans le code JSX du composant. L'élément div le plus externe a pour nom de classe "modal", et le conteneur du contenu a pour nom de classe "modal-content". Vous pouvez ajouter des styles personnalisés ou modifier les styles existants selon les besoins de votre projet.



``` css
.modal {
    /* Vos styles personnalisés pour le conteneur de la modal */
}

.modal-content {
    /* Vos styles personnalisés pour le contenu de la modal */
}
```
/* Ajoutez d'autres styles personnalisés au besoin */
N'hésitez pas à personnaliser les styles pour les adapter au design de votre application.

Licence
Ce package est distribué sous la licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer conformément aux termes de la licence.
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
