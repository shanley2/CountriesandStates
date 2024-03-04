FROM node:18.10-alpine
WORKDIR /countries_and_states_ts
COPY package*.json ./
RUN npm install

COPY . . 
EXPOSE 3000
CMD ["npm", "start"]