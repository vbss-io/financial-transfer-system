FROM node:16.14-alpine

WORKDIR /app-frontend

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY . .

RUN npm install

EXPOSE 5173

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "start"]