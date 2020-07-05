const express = require('express');
const router     = express.Router();

router.use(express.json());


//Normal get call
router.get('/', function(req, res) {
    res.send('Hello world');
    } );
    
    //Gt call with param
    router.get('/api/getdata', function(req, res){
        res.send([1,2,3]);
    });
    
    //get call with filter
    router.get('/:id/:id2', (req, res) => {
        res.send(req.params);
    } );
    
    //Sending error
    router.get('/api/getdata/:id/', (req, res) => {
        res.status(404).send('Data Not Found');
    });
    
    //post call
    const courses = [{
        id : 1,
        name : 'CSE'
    }];
    router.post('/', (req, res) => {
        if(!req.body.name || req.body.name.length < 3){
            res.status(400).send('Error in posting rest api');
            return;
        }
        const course = { 
            id : courses.length + 1,
            name: req.body.name
        };
    
        courses.push(course);
        res.send(courses);
    });

    module.exports = router;