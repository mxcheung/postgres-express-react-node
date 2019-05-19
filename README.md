# postgres-express-react-node
postgres-express-react-node

https://scotch.io/tutorials/getting-started-with-node-express-and-postgres-using-sequelize

https://github.com/waiyaki/postgres-express-node-tutorial/blob/master/server/migrations/20160717103305-create-todo.js


https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

https://dba.stackexchange.com/questions/83984/connect-to-postgresql-server-fatal-no-pg-hba-conf-entry-for-host

http://docs.sequelizejs.com/manual/getting-started.html#installing


$ npm i -D nodemon


npm run start:dev

and visiting http://localhost:8000. You should see {"message":"Welcome to the beginning of nothingness."}


 docker build -t mxcheung/postgres-express-react-node-tutorial_web .

 docker run -p 8000:8000 -d mxcheung/postgres-express-react-node-tutorial_web

 http://localhost:8000/api/todos


 [
    {
        "id": 3,
        "title": "first-todo",
        "createdAt": "2019-05-18T04:59:11.210Z",
        "updatedAt": "2019-05-18T04:59:11.210Z",
        "todoItems": [
            {
                "id": 4,
                "content": "first-todo item, inside first todo",
                "complete": false,
                "createdAt": "2019-05-18T04:59:22.174Z",
                "updatedAt": "2019-05-18T04:59:22.174Z",
                "todoId": 3
            },
            {
                "id": 5,
                "content": "second-todo item, inside first todo",
                "complete": false,
                "createdAt": "2019-05-18T13:21:56.774Z",
                "updatedAt": "2019-05-18T13:21:56.774Z",
                "todoId": 3
            }
        ]
    },
    {
        "id": 4,
        "title": "first-todo-get-mlik",
        "createdAt": "2019-05-18T13:20:57.112Z",
        "updatedAt": "2019-05-18T13:20:57.112Z",
        "todoItems": []
    }
]



File structure
============================
    .
    ├── ...
    ├── server               
    │   ├── config          # config
    │   |   └── config.json    
    │   └── controller      # Controller
    │       └── index.js    
    │       └── todo.js    
    │       └── todoitem.js    
    │   └── migration       # migration
    │       └── 20190518041131-create-todo.js    
    │       └── 20190518041230-create-todo-item.js    
    │   └── models          # model
    │       └── index.js    
    │       └── todo.js    
    │       └── todoitem.js    
    │   └── routes          # route
    │       └── index.js    
    └── ...