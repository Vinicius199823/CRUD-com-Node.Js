'use strict';

var dbConn = require('../../config/db.config');

var Usuario = function(usuario){

    this.nome = usuario.nome;
    this.email = usuario.email;
    this.senha = usuario.senha;
    this.cpf = usuario.cpf;
    this.telefone = usuario.telefone;
};

Usuario.create = function (newUsr, result){
    dbConn.query("INSERT INTO usuario set ?",newUsr, function(err,res){
        if(err){
            console.log("error: ", err);

            result(err, null);
        }
        else{
            console.log(res.insertID);

            result(null, res.insertID);
        }
    });
};

Usuario.findById = function (id, result) {
    dbConn.query("Select * from usuario where id=?", [id], function(err, res){
        if(err){
            console.log("error: ", err);

            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};
Usuario.findAll = function(result){
    dbConn.query("SELECT * from usuario", function (err, res){
        if(err){
            console.log("error: ", err);

            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

Usuario.update = function(id, usuario, result){

    dbConn.query("UPDATE usuario SET nome = ?, email = ?, senha = ?, cpf = ?, telefone = ? WHERE id = ?", [usuario.nome, usuario.email, usuario.senha, usuario.cpf, usuario.telefone, id], function (err, res){
        if(err){
            console.log("error: ", err);

            result(null, err);
        }
        else{
            result(null, err);
        }
    });
}
Usuario.delete=function(id,result){
    dbConn.query("DELETE from usuario where id = ?",[id], function(err, res){
        if(err){
            console.log("error: ", err);

            result(null, err);
        }
        else{
            result(null, res);
        }

    });
}

module.exports = Usuario;