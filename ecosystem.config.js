module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key: 'crookedlion2.pem',
      user : 'ubuntu',
      host : '18.233.7.253',
      ref  : 'origin/main',
      repo : 'git@github.com:LeonardoMateo1/CrookedLion.git',
      path : '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
