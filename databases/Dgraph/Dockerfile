FROM node:lts-alpine3.10 as test-target
ENV NODE_ENV=development
ENV PATH $PATH:/usr/src/app/node_modules/.bin

WORKDIR /usr/src/app

COPY package*.json ./

# CI and release builds should use npm ci to fully respect the lockfile.
# Local development may use npm install for opportunistic package updates.
ARG npm_install_command=ci
RUN yarn

COPY . .

# Build
FROM test-target as build-target
ENV NODE_ENV=production
RUN rm tsconfig.json
RUN mv tsconfig.build.json tsconfig.json

# Use build tools, installed as development packages, to produce a release build.
RUN yarn generate:prisma
RUN yarn build

# Reduce installed packages to production-only.
RUN yarn install --production

# Archive
FROM node:lts-alpine3.10 as archive-target

WORKDIR /usr/src/app
EXPOSE 4000
# Include only the release build and production packages.
#COPY --chown=node --from=build-target /usr/src/app/ .
COPY --from=build-target /usr/src/app/ .

#USER node

CMD ["yarn", "start"]

