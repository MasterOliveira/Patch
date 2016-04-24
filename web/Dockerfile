FROM centos:centos6

# Extra packages form Entreprise Linux for CentOS
RUN yum install -y epel-release
# Installs Node.js + npm
RUN yum install -y nodejs npm

# Installs App dependencies and Ataches App source code
COPY . /usr/src/patch
WORKDIR /usr/src/patch
RUN npm install

# Exposes App port
EXPOSE 3000
# Runs the App
CMD ["nodemong", "server"]