# CONTRIBUER AU PROJET 

## Sommaire

- [Les issues](#les-issues)
- [Agile](#agile)
- [Les permissions](#les-permissions)
- [Intégration continue](#intégration-continue)
- [FAQ](#FAQ)
- [Liens](#liens)
- [Glossaire](#glossaire)

## Les issues

Le système d'issues de github n'est pas le plus complet mais il permet d'avoir tout de même un bon suivi.

Vous pouvez créez des catégories (labels), assigner les tâches, les estimer, gérer des roadmaps, ajouter des fichiers, commenter, recevoir des notifications, etc... un lieu idéal pour centraliser les discussions autour d'un projet et favoriser la collaboration transparente.

Pour accéder aux issues du projet :

![issues-menu](./.github/img/project-issues.png)

Vous accédez alors à la liste des issues du projet

![issues-list](./.github/img/issues-list.png)

La création des issues se font directement sur le kanban accessible depuis la racine de la team:

![issues-new](./.github/img/project-kanban.png)

Cliquez sur le projet "Edugame v2", Créer une note puis la convertir en issue :

![issues-new](./.github/img/issues-create.png)

Créer une bonne issue est essentiel pour sa résolution. Chaque issue doit être explicite, avec **un cas reproductible** en cas de remontée de bug. Vous pouvez avoir quelques pistes pour [rédiger un bon rapport de bug ici](http://blogtorop.fr/comment-faire-un-bon-rapport-de-bug/).

### Agile

Les issues sont organisées dans des "boards" type "kanban".

![issues-boards](./.github/img/issues-kanban.png)

Les issues peuvent être groupés par "milestones" (sprints). Ceci permet de grouper des tâches pour en suivre la complétion.

![issues-milestones](./.github/img/issues-milestone.png)

## Les permissions

Les membres de l'équipe ont des permissions qui diffères d'un role à l'autre.


Permission                  | Members | Admin  | Owner
----------------------------|:-------:|:------:|:------:
Voir les Issues             |    ✔    |   ✔    |   ✔   |
Gérer les issues            |    ✔    |   ✔    |   ✔   |
Effacer une issue           |    ⨯    |   ✔    |   ✔   |
Lire le wiki                |    ✔    |   ✔    |   ✔   |
Editer le wiki              |    ✔    |   ✔    |   ✔   |
Commenter                   |    ✔    |   ✔    |   ✔   |
Edit un commentaire         |    ⨯    |   ✔    |   ✔   |
Lire le code                |    ✔    |   ✔    |   ✔   |
Contribuer (merge request)  |    ✔    |   ✔    |   ✔   |
git push                    |    ✔    |   ✔    |   ✔   |
Gérer l'équipe projet       |    ⨯    |   ✔    |   ✔   |
Transférer un projet        |    ⨯    |   ✔    |   ✔   |
Effacer un project          |    ⨯    |   ✔    |   ✔   |
Voir les jobs               |    ✔    |   ✔    |   ✔   |
Configurer les hooks        |    ⨯    |   ✔    |   ✔   |
Voir les environments       |    ⨯    |   ✔    |   ✔   |
Créer un environment        |    ⨯    |   ✔    |   ✔   |

## Intégration continue

L'intégration continue nous permet de déployer sans avoir à le faire manuellement.
Il nous permet de tester le build, faire des tests unitaire et/ou fonctionnel ainsi que le deploiement du projet sur le serveur dédié au projet à l'aide de github actions.

URL production : [https://edugame.fr](https://edugame.fr)

URL pre-production : [https://dev.edugame.fr](https://dev.edugame.fr)

## FAQ

WIP

## Liens

 - [L'art de faire des commits atomiques](http://adopteungit.fr/methodologie/2017/04/26/commits-atomiques-la-bonne-approche.html)
 - [L'art de faire des issues efficaces](https://www.lesintegristes.net/2011/10/19/rediger-un-rapport-de-bugs-ca-na-pas-lair-pas-mais-cest-du-boulot/)

## Glossaire
 - **intégration continue** : pratique qui consiste à vérifier chaque modification du code source pour prévenir les régressions.  Le principal but de cette pratique est de détecter les problèmes d'intégration au plus tôt lors du développement. De plus, elle permet d'automatiser l'exécution des suites de tests et de voir l'évolution du développement du logiciel.
 - **devops** : mouvement visant à l'alignement de l'ensemble des équipes du système d'information sur un objectif commun, à commencer par les équipes de dev ou dev engineers chargés de faire évoluer le système d'information et les ops ou ops engineers responsables des infrastructures.
 - **commit** :  Fait d'enregistrer dans un outil de gestion de versions une nouvelle version d'un ensemble de fichiers.
 - **release** : version fixée d'une réalisation
 - **issue** : Un ticket qui permet de définir une feature ou un bug.
 - **repository** : Un projet au sens GIT
 - **origin** : GIT étant décentralisé, `origin` est le nom conventionnel du serveur par défaut
 - **upstream** : Lorsque l'on copie (fork) un projet, `upstream` représente le repository d'origine par convention
 - **fourcher/forker** : copier intégralement un repository
