var express = require('express');
var bodyParser = require('body-parser');
var middleware = require('./controllers/middleware');
var mainCtrl = require('./controllers/mainCtrl');

var app = express();




app.use(bodyParser.json());

app.use(middleware.addHeaders);

app.get('/user', mainCtrl.index);
app.get('/name', mainCtrl.showName);
app.get('/location', mainCtrl.showLocation);
app.get('/occupations', mainCtrl.showOccupations);
app.get('/occupations/latest', mainCtrl.showLatestOccupation);
app.get('/occupations/:order', mainCtrl.showOccupationsOrdered);
app.get('/hobbies', mainCtrl.showHobbies);
app.get('/hobbies/:type', mainCtrl.showHobbiesType);
app.get('/family', mainCtrl.showFamily);
app.get('/family/:gender', mainCtrl.showFamilyGender);
app.get('/restaurants', mainCtrl.showRestaurants);
app.get('/restaurants/:type', mainCtrl.showRestaurantsType);
app.get('/skillz', mainCtrl.showSkillz);
app.get('/secrets/:username/:pin', middleware.verifyUser, mainCtrl.showSecrets)
app.put('/name/:name', mainCtrl.updateName);
app.put('/location/:location', mainCtrl.updateLocation);
app.post('/hobbies', mainCtrl.createHobby);
app.post('/occupations', mainCtrl.createOccupations);
app.post('/family', mainCtrl.createFamily);
app.post('/restaurants', mainCtrl.createRestaurants);
app.post('/skillz', middleware.generateId, mainCtrl.createSkillz);

var port =3000;
app.listen(port, function(){
      console.log(`listening to port ${port}`)
});
