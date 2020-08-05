# edugame2-back
Backend du projet Edugame2

![Work in progress](http://www.repostatus.org/badges/latest/wip.svg)

## Status

| Language | Action | Coveralls |
|:--------:|:------:|:---------:|
| ![GitHub top language](https://img.shields.io/github/languages/top/Edugame-Team/edugame2-back) | ![](https://img.shields.io/github/workflow/status/Edugame-Team/edugame2-back/CICD-prod/master) | ![](https://img.shields.io/github/workflow/status/Edugame-Team/edugame2-back/CICD-prod/blabla) |

## Sommaire

- [Description](#description)
- [Prérequis](#prérequis)
- [Installation (avec docker)](#installation-avec-docker)
- [Installation (sans docker)](#installation-sans-docker)
- [Auteurs](#auteurs)
- [Licence](#licence)

## Description

C'est un back-end permettant à l'application web d'interagir avec une API. Cette API est en mesure de de faire du traitement de données et de communiquer avec la base de données.

## Prérequis

 - [Node.js](https://nodejs.org/en/) est nécessaire si le projet est lancé sans docker.
 - [Yarn](https://classic.yarnpkg.com/fr/docs/install/#windows-stable) est le gestionnaire de dépendances utilisé dans ce projet. Son installation est requise afin de le lancer sans docker.
 - [PgAdmin](https://www.pgadmin.org/download/) est un outil de gestion de base de données. Il est nécessaire pour ce projet si n'utilisez pas docker de créer une base de données via PgAdmin du nom indiqué dans la config (Ou le nom de votre choix en changeant les paramètres du fichier de configuration dans config/config.json).
 - [Docker](https://docs.docker.com/get-docker/) Docker pour lancer le projet (Un dockerfile + docker-compose sont disponibles).

## Installation (avec docker)

 - **docker-compose up** en étant dans le dossier du projet. L'application sera disponible sur le port 3000. Il créera une base de données Postgresql ainsi que les tables associés au projet.

## Installation (sans docker)

 - **yarn install** afin d'installer les dépendances nécessaires du projet.
 - **yarn start** pour lancer l'application.
 - **yarn start:watch** pour lancer l'application en mode dev (nodemon actif).

## Auteurs

- Fahim Benchaabane <fahim.benchaabane@epitech.eu>
- Arnaud Heymans <arnaud.heymans@epitech.eu>
- Thomas Lopez <thomas.lopez@epitech.eu>

## Licence
[![License](https://img.shields.io/badge/License-Apache%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)

