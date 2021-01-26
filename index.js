const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const path = require ('path');

app.use(express.json());
app.use(express.static('./files'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 

const livro = [
    { id: 1, titulo: 'A', ano: 1990, autor: 'thiago', editora: 'abril', formato: 'hardback'},
];

const autor = [
    { id: 1, nome: 'heitor', apelido: 'garcia', nascimento: 1998},
];

const editora = [
    { id: 1, nome: 'abril', endereco: 'av. da liberdade'},
];





app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    res.send('livraria'); 
});
//Get all data form livros
app.get('/api/livro', (req, res) => {
    //res.send(livros);  
   var data = {id: 1, titulo: 'A', ano: 1990, autor: thiago, editora: 'abril', formato: 'hardback'};
    res.render('livro', {person: req.params, data:data});
 });
 
 app.get('/api/livror', (req, res) => {
     //res.send(livros);  
     var data = {id: 1, titulo: 'A', ano: 1990, autor: thiago, editora: 'abril', formato: 'hardback'};
     res.render('livror', {person: req.params, data: data});
  });
 
 //Get all data form autor
 app.get('/api/autor', (req, res) => {
     //res.send(autor);
     var data =  { id: 1, nome: 'heitor', apelido: 'garcia', nascimento: 1998};
     res.render ('autor', {person: req.params, data: data});
 });
 
 app.get('/api/autorr', (req, res) => {
     //res.send(autor)
     var data =  {id: 1, nome: 'heitor', apelido: 'garcia', nascimento: 1998};
     res.render ('autorr', {person: req.params, data: data});
 });
 
 //Get all data form editora
 app.get('/api/editora', (req, res) => {
    // res.send(editora);
     var data = {id: 1, nome: 'abril', endereco: 'av. da liberdade'};
     res.render('editora', {person: req.params, data: data});
 });
 
 app.get('/api/editorar', (req, res) => {
     // res.send(softwares);
      var data = {id: 1, nome: 'abril', endereco: 'av. da liberdade'};
      res.render('editorar', {person: req.params, data: data});
  });
 

//Get data with id form livro
app.get('/api/livro/:id', (req, res) => {
    const livro = livro.find(c => c.id === parseInt(req.params.id));
    if (!livro)
        res.status(404).send('The book with the given ID was not found!');

    res.send(livro);
});

//Get data with id form autor
app.get('/api/autor/:id', (req, res) => {
    const autor = autor.find(c => c.id === parseInt(req.params.id));
    if (!autor)
        res.status(404).send('The author with the given ID was not found!');

    res.send(autor);
});

//Get data with id form editora
app.get('/api/editora/:id', (req, res) => {
    const editora = softwares.find(c => c.id === parseInt(req.params.id));
    if (!editora)
        res.status(404).send('The publishing company with the given ID was not found!');

    res.send(editora);
});






//Post to livro
app.post('/api/livro', (req, res) => {
    const livro = {
        id: livro.length + 1,
        titulo: req.body.titulo,
        autor: req.body.autor,
        editora: req.body.editora,
        formato: req.body.formato
    };
    livro.push(livro);
    res.send(livro);

});

//Post to autor
app.post('/api/autor', (req, res) => {
    const autor = {
        id: autor.length + 1,
        nome: req.body.nome,
        apelido: req.body.apelido,
        nascimento: req.body.nascimento
    };
    autor.push(autor);
    res.send(autor);
});

//Post to editora
app.post('/api/editora', (req, res) => {
    const editora = {
        id: editora.length + 1,
        nome: req.body.nome,
        endereco: req.body.endereco
    };
    softwares.push(software);
    res.send(softwares);
});


//Put to livro
app.put('/api/livro/:id', (req, res) => {
    const livro = livro.find(c => c.id === parseInt(req.params.id));
    if (!livro) 
        res.status(404).send('The book with the given ID was not found');
    
    livro.nome = req.body.nome;
    livro.ano = req.body.ano;
    livro.autor = req.body.autor;
    livro.editora = req.body.editora;
    livro.formato= req.body.formato;
    res.send(livro);

});

//Put to autor
app.put('/api/autor/:id', (req, res) => {
    const autor = autor.find(c => c.id === parseInt(req.params.id));
    if (!autor)
        res.status(404).send('The author with the given ID was not found!');

    autor.nome = req.body.nome;
    autor.apelido = req.body.apelido;
    autor.nascimento = req.body.nascimento;
});

//Put to editora
app.put('/api/softwares/:id', (req, res) => {
    const editora = softwares.find(c => c.id === parseInt(req.params.id));
    if (!editora)
        res.status(404).send('The publishing company with the given ID was not found!');

    editora.nome = req.body.nome;
    editora.endereco = req.body.endereco;
});


//Delete livro
app.delete('/api/livro', (req, res) => {
    const antena = livro.find(c => c.id === parseInt(req.body.id));
    if (!livro) 
        res.status(404).send('The book with the given ID was not found');

    const index = livro.indexOf(livro);
    livror.splice(index, 1);

    res.send(livro);
});

//Delete autor
app.delete('/api/autor', (req, res) => {
    const autor = autor.find(c => c.id === parseInt(req.body.id));
    if (!autor) 
        res.status(404).send('The author with the given ID was not found');

    const index = autor.indexOf(autor);
    autorr.splice(index, 1);

    res.send(autor);
});

//Delete editora
app.delete('/api/editora', (req, res) => {
    const editora = editora.find(c => c.id === parseInt(req.body.id));
    if (!editora) 
        res.status(404).send('The publishing company with the given ID was not found');

    const index = editora.indexOf(editora);
    editora.splice(index, 1);

    res.send(editora);
});




app.listen(3000, () => {
    console.log('Listening on port 3000...');
});