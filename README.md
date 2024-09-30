création un API REST avec Node et Express
Explication brève d'une API
Système de liaison entre l'interface client le serveur et la base de donnée.
 Le client envoie des requêtes (GET, POST, DELETE...) au système REST API qui les fait parvenir à la base de donnée
 La bdd envoie des informations à l'API et celui-ci les envoie au cilient en format json.

 npm init -y.

 npm install express --save

 npm install --save-dev nodemon pour que le serveur s'actualise tout seul avec nodemon

 On va utiliser 5 types de requêtes : 
 GET pour trouver les users et les détails
 POST pour créer un user
DELETE pour supprimer un user
PATCH pour actualiser un user
