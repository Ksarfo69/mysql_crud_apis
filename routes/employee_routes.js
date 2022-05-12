const express = require('express');
const router = express.Router();
const dbConn = require('../config/dbConn')


// get all employees
router.get('/getall', async(req,res)=>{
    query = 'SELECT * FROM employee'
    dbConn.query(query, (err, results)=>{
        if (err){
            res.status(201).send(err)
        }
        else {
            res.status(200).send(results)
        }
    })
})


// get employee by id
router.get('/get/:id', async(req, res)=>{
    query = 'SELECT * FROM employee WHERE emp_id = ?'
    dbConn.query(query, [req.params.id], (err, results)=>{
        if(err){
            res.status(201).send(err)
        }
        else{
            res.status(200).send(results)
        }
    })
})


// create new employee record
router.post('/new/employee', (req, res)=>{
    query = 'INSERT INTO employee values(?, ?, ?, ?, ?, ?, ?, ?)'
    data = [
        req.body.emp_id,
        req.body.first_name,
        req.body.last_name,
        req.body.birth_date,
        req.body.sex,
        req.body.salary,
        req.body.super_id,
        req.body.branch
    ]
    dbConn.query(query, data, (err)=>{
        if(err){
            res.status(201).send(err)
        }
        else{
            res.status(200).send("Entered into database successfully")
        }
    })
})


router.put('/edit/:id', (req, res)=>{
    query = 'UPDATE employee SET emp_id = ?, first_name = ?, last_name = ?, birth_date = ?, sex = ?, salary = ?, super_id = ?, branch = ? WHERE emp_id = ?'
    data = [
        req.body.emp_id,
        req.body.first_name,
        req.body.last_name,
        req.body.birth_date,
        req.body.sex,
        req.body.salary,
        req.body.super_id,
        req.body.branch,
        req.params.id
    ]
    dbConn.query(query, data, (err)=>{
        if(err){
            res.status(201).send(err)
        }
        else{
            res.status(200).send('upadated successfully')
            
        }
    } )
})


router.delete('/delete/:id', (req, res)=>{
    query = 'DELETE FROM employee WHERE emp_id = ?'
    dbConn.query(query, [req.params.id], (err)=>{
        if(err){
            res.status(201).send(err)
        }
        else{
            res.status(200).send('Employee deleted successfully')
        }
    })
})


module.exports = router