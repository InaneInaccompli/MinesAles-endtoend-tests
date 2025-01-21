# Résumé des tests End-to-end (réalisés grâce à Nightwatch)
## Page admin
Voici les scénarios couverts par le test de la page admin :
1. Chargement de la page admin : La page http://localhost:9090/admin est chargée dans le navigateur. On vérifie que l'élément <body> est visible pour confirmer que la page s'est bien chargée.

2. Connexion avec des identifiants administrateur
* Le champ d'entrée avec le nom name est rempli avec testadminuser.
* Le champ d'entrée avec le nom password est rempli avec testadminuser.
* Le bouton de soumission du formulaire (de type submit) est cliqué.
* L'URL contient /admin après la soumission pour confirmer que la redirection a réussi.
* La page s'est rechargée correctement après connexion (vérification supplémentaire de l'élément <body> visible).

3. Accès autorisé à la page admin : L'URL contient /admin pour s'assurer que l'utilisateur a bien accès à la page après la connexion.

4. Présence de la table des messages : Vérifier si une table contenant les messages est visible. On vérifie que l'élément <table> est présent et visible.

5. Vérification des en-têtes de la table
* Inspecter les en-têtes de la table pour vérifier qu'ils contiennent les bonnes informations :
  * Le premier en-tête contient "dates".
  * Le deuxième en-tête contient "authors".
  * Le troisième en-tête contient "arrived -> departure".
  * Le quatrième en-tête contient "messages".
  * Le cinquième en-tête contient "delete".
* Chacun des en-têtes est présent avec le texte attendu.

6. Fin du test : Le navigateur est fermé proprement à la fin du test.

## Page contact
1. Chargement de la page contact : La page http://localhost:9090/contact est chargée. L'élément <body> devient visible dans un délai de 5 secondes, confirmant que la page s'est correctement chargée.

2. Présence du formulaire de contact : Vérifier si le formulaire de contact est visible sur la page. L'élément <form> est présent et visible.

3. Remplissage des champs du formulaire
* Les champs du formulaire sont remplis avec des données de test :
  * Champ firstName : "Utilisateur".
  * Champ lastName : "Test".
  * Champ mobilePhone : "0610203040".
  * Champ arrivedAt : "21/01/2025".
  * Champ departureAt : "21/01/2025".
  * Champ email : "test@example.com".
  * Champ message : "Test".

4. Soumission du formulaire : Le bouton de soumission (type submit) est cliqué. Une pause de 1 seconde est ajoutée pour permettre à la page de réagir à la soumission.

5. Reste sur la page après soumission : L'URL contient toujours /contact, confirmant que l'utilisateur reste sur la page après la soumission (aucune redirection indésirable).

6. Fin du test : Le navigateur est fermé proprement à la fin du test.

## Page avis
1. Chargement de la page avis : La page http://localhost:9090/feedback est chargée. L'élément <body> devient visible dans un délai de 5 secondes, confirmant que la page s'est correctement chargée.

2. Présence du formulaire d'avis : Vérifier si le formulaire d'avis est visible sur la page. L'élément <form> est présent et visible.

3. Remplissage des champs du formulaire
Les champs du formulaire sont remplis avec des données de test :
 * Champ name : "testadminuser".
 * Champ message : "Test".

4. Soumission du formulaire : Le bouton de soumission (type submit) est cliqué. Une pause de 1 seconde est ajoutée pour permettre à la page de réagir à la soumission.

5. Reste sur la page après soumission : L'URL contient toujours /feedback, confirmant que l'utilisateur reste sur la page après la soumission (aucune redirection imprévue).

6. Fin du test : Le navigateur est fermé proprement à la fin du test.

## Page geolocalisation
1. Chargement de la page de géolocalisation : La page http://localhost:9090/geo est chargée dans le navigateur. L'élément <body> devient visible dans un délai de 5 secondes, confirmant que la page s'est correctement chargée. Ensuite, l'élément <iframe> est visible après une attente de 1 seconde.

2. Présence de la carte : Vérification que la carte (contenue dans un <iframe>) est bien visible. Le test s'assure que l'élément <iframe> est effectivement visible, indiquant que la carte se charge correctement et que l'interface utilisateur de géolocalisation est accessible.

3. Contenu de la page : Vérification de la présence de certains textes dans la section principale de la page. Le texte "Nos meilleures adresses" et "A proximité" est recherché dans l'élément <main>. Cela confirme que le contenu attendu est bien présent sur la page, garantissant que l'utilisateur voit les informations pertinentes liées à la géolocalisation.

4. Fin du test : Fermeture propre du navigateur après l'exécution des assertions.

## Page d'accueil
1. Chargement de la page d'accueil : La page http://localhost:9090 est chargée dans le navigateur. L'élément <body> devient visible dans un délai de 5 secondes, confirmant que la page s'est correctement chargée.

2. Présence du titre principal : Vérification que le titre principal de la page est visible. L'élément avec la classe .home--header-title est visible. De plus, le texte "A LOUER APPARTEMENT ROSAS" est bien présent dans ce titre, garantissant que le contenu principal de la page d'accueil est correctement affiché.

3. Présence des sections : Vérification de la visibilité de certaines sections de la page d'accueil.
Vérification :
 * La galerie d'appartements (élément #appartement-gallerie) est affichée.
 * La section des caractéristiques (élément #caracteristiques) est affichée.
 * La section des tarifs (élément #tarifs) est affichée.

Cela garantit que les sections importantes de la page d'accueil, qui présentent des informations sur les appartements, les caractéristiques et les prix, sont toutes visibles pour l'utilisateur.

4. Redirection vers la page de contact : Le lien vers la page de contact est cliqué (élément <a href="/contact"]>). Après avoir cliqué sur le lien, l'attente de 5 secondes est effectuée pour s'assurer que la page se charge correctement. Ensuite, le test vérifie que l'URL contient bien /contact, confirmant que l'utilisateur a bien été redirigé vers la page de contact.

5. Fin du test : Fermeture propre du navigateur après l'exécution des assertions.

## Page de connexion
1. Chargement de la page de connexion : La page http://localhost:9090/login est chargée dans le navigateur. L'élément <body> devient visible dans un délai de 1 seconde, confirmant que la page s'est correctement chargée.

2. Remplissage du formulaire de connexion : Les champs du formulaire de connexion sont remplis avec des données de test
 * Le champ name est rempli avec testadminuser.
 * Le champ password est rempli avec testadminuser.

Vérification : Cela garantit que les valeurs sont correctement insérées dans les champs du formulaire.

3. Soumission du formulaire : Le bouton de soumission du formulaire (type submit) est cliqué.  Une pause de 1 seconde est ajoutée après le clic pour permettre à la page de réagir à la soumission du formulaire.

4. Redirection vers la page d'administration : Vérification que l'utilisateur est bien redirigé vers la page d'administration après la soumission. Le test s'assure que l'URL contient /admin, confirmant que la redirection vers la page d'administration a bien eu lieu.

5. Fin du test : Fermeture propre du navigateur après l'exécution des assertions.

## Page tarifs
1. Chargement de la page de tarification : La page http://localhost:9090/pricing est chargée dans le navigateur. L'élément <body> devient visible dans un délai de 5 secondes, confirmant que la page s'est correctement chargée.

2. Présence de la table de tarification : Vérification que la table de tarification (élément #tarifs-pricing) est visible sur la page. L'élément #tarifs-pricing est visible, garantissant que la section de tarification est bien présente.

3. Structure de la section de tarification : Vérification que la section de tarification contient une div avec la classe "row". L'élément #tarifs-pricing > .row est présent, ce qui indique que la structure de la section est correcte.

4. Nombre de colonnes : Vérification qu'il y a exactement 3 colonnes dans la section de tarification. Le test utilise un sélecteur CSS pour récupérer les éléments .col-4 à l'intérieur de .row et vérifie qu'il y en a exactement 3. Cela garantit que la structure de la grille est conforme à l'attente.

5. Présence des cartes dans chaque colonne : Vérification que chaque colonne contient bien une carte (élément .card). Le test vérifie qu'il y a 3 cartes (éléments .card), une dans chaque colonne .col-4. Cela assure que la présentation des options de tarification est bien structurée.

6. Fin du test : Fermeture propre du navigateur après l'exécution des assertions.