sudo apt update
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install cross-env
sudo npm install -D vuepress
sudo npm run docs:serve
