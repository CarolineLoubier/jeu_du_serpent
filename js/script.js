
document.addEventListener("DOMContentLoaded", function(event) {

//Le jeu
    //Classe d'objet (déclaration de l'objet)
    class Jeu{
        constructor(_idSvg, _idPointage) {
            console.log("Création du jeu");
            // Le Snap() vient de Snap SVG.
            this.s = Snap(_idSvg);
            this.sortiePointage = document.querySelector(_idPointage);
            this.grandeurCarre = 20;
            this.grandeurGrille = 15;
        }

        //Dans une class, les "fonctions" sont appelées méthodes.
        nouvellePartie()
        {
            this.finPartie();
            this.affichagePointage(1);

            this.pomme = new Pomme(this);
            this.serpent = new Serpent(this);
        }

        finPartie()
        {
            if(this.pomme !== undefined) {
                this.pomme.supprimePomme();
                this.pomme = undefined;
            }

        }

        affichagePointage(_lePointage)
        {
            this.sortiePointage.innerHTML = _lePointage;
        }
    }

//Le serpent

    class Serpent {
        constructor(_leJeu) {
            console.log("Création du serpent");
            this.leJeu = _leJeu;
            document.addEventListener("keydown", this.verifTouche);
        }

        verifTouche(_evt)
        {
            var evt = _evt;
            console.log(evt.key);
            this.deplacement(evt.key);
        }

        deplacement(dirCode) {

        }

        controleSerpent()
        {

        }

        dessineCarre(x, y)
        {

        }

        supprimeSerpent()
        {

        }
    }
//La pomme
    class Pomme {
        constructor(_leJeu) {
            console.log("Création de la pomme");
            this.leJeu = _leJeu;

            this.dessinPomme = [];
            this.ajoutePomme();
        }

        ajoutePomme() {
            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            // Dessiner un élément rectangle avec la fonction rect() de Snap svg, on donne des paramètres pour la position du coin gauche, la position en X et en Y, la largeur et hauteur.
            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill:"red"}), posX, posY];
        }

        supprimePomme()
        {
            this.pomme[0].remove();
        }
    }

    var unePartie = new Jeu("#jeu", "#pointage");
    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener("click", nouvellePartie);

    function nouvellePartie() {
        unePartie.nouvellePartie();
    }
});