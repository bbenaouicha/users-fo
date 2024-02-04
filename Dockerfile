FROM node:18.18.0 as builder

WORKDIR /usr/app

COPY ./ ./

RUN npm install \
    && npm run build


FROM nginx AS runner
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/app/dist/gestion_utilisateur/ /usr/share/nginx/html/

