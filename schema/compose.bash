#!/usr/bin/bash
composedb composite:create ./graphql/User.graphql --output=./json/User.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da && 
composedb composite:create ./graphql/Blog.graphql --output=./json/Blog.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da &&
composedb composite:create ./graphql/Fleet.graphql --output=./json/Fleet.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da &&
composedb composite:create ./graphql/Warden.graphql --output=./json/Warden.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da &&
composedb composite:create ./graphql/Subscription.graphql --output=./json/Subscription.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da &&
composedb composite:create ./graphql/UserWardens.graphql --output=./json/UserWardens.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da
composedb composite:create ./graphql/UserSub.graphql --output=./json/UserSub.json --did-private-key=3bb9e63aec3d8bef82a6f90416676404fa272679f1be47edabb798f1ad6055da &&