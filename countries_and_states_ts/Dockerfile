FROM node:18.10-alpine as base
WORKDIR /app
COPY package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]

FROM base as builder
COPY . . 
RUN npm run build

FROM nginx:1.25-alpine as production
 

COPY --from=builder /app/build /usr/share/nginx/html
WORKDIR /usr/share/nginx/html 
#can proobably take out workdir here
#CMD ["nginx","-g", "daemon off;"]