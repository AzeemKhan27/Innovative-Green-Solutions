# vultr:

- server hostname : postgresql-server
- server label : My PostgreSQL Label


How to login Server:

1- ssh-keygen -t rsa -b 4096 -C "erazeem.career27@gmail.com"
2- enter >> enter >> 

now saved in :

Your identification has been saved in /home/azimdev/.ssh/id_rsa
Your public key has been saved in /home/azimdev/.ssh/id_rsa.pub

3- check and show SSH key :

 - cat ~/.ssh/id_rsa.pub

4- copy full key.
5- login vultr and paste it.    

# Docker Installation in Ubuntu.

 - sudo apt install gnome-terminal
 - sudo apt-get update
 - sudo apt-get install ./docker-desktop-amd64.deb

# Regular Maintenance: 
Use Docker CLI or Portainer to prune unused images and containers to save disk space:

- docker system prune


