FROM node:12 as  react_build 

WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app/ 
COPY .env /app/
RUN  yarn  build

#prepare nginx
FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY /.well-known/ /usr/share/nginx/html/.well-known/
COPY --from=react_build /app/build /usr/share/nginx/html
#fire up nginx
EXPOSE 80 
CMD ["nginx","-g","daemon off;"]



