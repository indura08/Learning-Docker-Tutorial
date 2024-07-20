# FROM node:latest

# #container eke working directory ekk hdna eka thami mekn krnne , app kiyla ekk thiynwa ekt ynwa nattnm aluth ekk hdenwa
# WORKDIR /app

# #methna palaweni dot eka kiynne danata api inna directory ek , enam user-service-api foler ek, anik dot ekn kiynne api container eke volume ek enam workdir eke /app kiyl api deepu ek
# ADD . . 

# #menna me  kalla container eke run wena hinda apoita node_modules docker file ekt harinm danna one nah , e hinda node_modules folder eka dockerignore file ekt dfammahki.
# RUN npm install

# #meke theruma menna me container start wenkota menna me command eka run wenna one kiyna eki meke theruma
# CMD node index.js

#uda deela thiyna widiyt dockerfile eka hduwama caching use wenne nh hariyt okd api source code ek withrk wenas klath anih hama ekm daala aaye aaye hdnna one image eka , me pahatha thiyna widiyt kalama shape eke ewa avoid krgena docker caching ehma use krla krgnna puluwan

FROM node:20.11.0-alpine

#Think of this as telling Docker, "From now on, whenever you do something, start in this folder."
#/app: This is the name of the folder where Docker will start working from.
WORKDIR /app        

#meke theruma package namin ptaaran elagt onema deyk thiytena .json file okkoma(anthimt thiyn dot ekn kiynne okkoma kiyla) add krnna kiyla
#meken me widiyt damma dependancies aaye aaye dana one nha chaching walin eka set wenwa 
ADD package*.json ./ 

RUN npm install
ADD . .
CMD node index.js

#hodt mathk thiygnna menna me dcker file eke commands daana widiye piliwela ithama wadagath mokda speedup krgnna puluwan images hariytm manage kalama meke piliwlea , meka docker caching system scn eka igananganiddi thami type kale mama
