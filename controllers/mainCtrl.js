var user = require('../models/user');
var skillz = require('../models/skillz');
var secrets = require('../models/secrets')

module.exports = {
  index: function(req, res) {
      res.status(200).json(user);
  },
    showName: function(req, res) {
        res.status(200).json(user.name)
    },
    showLocation: function(req, res) {
        res.status(200).json(user.location)
    },
    showOccupations: function(req, res) {
        res.status(200).json(user.occupations)
    },
    showOccupationsOrdered: function(req, res) {
        if (req.params.order === 'desc') {
             return res.status(200).json(user.occupations.sort())
        } else if (req.params.order === 'asc') {
            res.status(200).json(user.occupations.sort().reverse())
        }
    },
    showLatestOccupation: function(req, res) {
        res.status(200).json(user.occupations[user.occupations.length - 1])
    },
    showHobbies: function(req, res) {
        res.status(200).json(user.hobbies)
    },
    showHobbiesType: function(req, res) {
        res.status(200).json(user.hobbies.filter(function(x) {
            return x.type === req.params.type;
        }))
    },
    showFamily: function(req, res) {
      if(req.query.relation) {
        let filtered = user.family.filter(relate=> relate.relation === req.query.relation.toLowerCase())
        return res.status(200).json(filtered)
      } else {
        res.status(200).json(user.family)
      }
    },
    showFamilyGender: function(req, res) {
        res.status(200).json(user.family.filter(function(x) {
            return x.gender === req.params.gender;
        }))
    },
    showRestaurants: function(req, res) {
      if(req.query.rating) {
        let filtered = user.restaurants.filter(rate=> parseInt(rate.rating) >= parseInt(req.query.rating))
        return res.status(200).json(filtered)
      } else {
        res.status(200).json(user.restaurants)
      }
    },
    showRestaurantsType: function(req, res) {
        res.status(200).json(user.restaurants.filter(function(x) {
            return x.type === req.params.type;
        }))
    },
    updateName: function(req, res) {
          user.name = req.params.name
          res.status(201).json(user)
    } ,
    updateLocation: function(req, res) {
          user.location = req.params.location
          res.status(201).json(user)
    },
    createHobby: function(req, res) {
          user.hobbies.push(req.body);
          res.status(201).json(user)
    },
    createFamily: function(req, res) {
          user.family.push(req.body);
          res.status(201).json(user)
    },
    createRestaurants: function(req, res) {
          user.restaurants.push(req.body);
          res.status(201).json(user)
    },
    createOccupations: function(req, res) {
          user.occupations.push(req.body.occupation);
          res.status(201).json(user)
    },
    showSkillz: function(req, res) {
      if (req.query.experience){
      let filtered = skillz.filter(skill=>skill.experience === req.query.experience)
        return res.status(200).json(filtered)
      } else {
        res.status(200).json(skillz)
      }
    },
    createSkillz: function(req, res) {
      skillz.push(req.body)
        res.status(200).json(skillz)
    },
    showSecrets: function(req, res) {
      res.status(200).json(secrets)
    }





}
