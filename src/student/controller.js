const pool = require('../../db');
const queries = require('./queries');

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  })
}

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;

  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists.");
    }
    // add student to db
    pool.query(queries.addStudent, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.starus(201).send("Student Created Successfully!");
    })

  });
};

// Remove Student 
const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  // Check if Student id exists using queries.getStudentById
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Student does not exist in the database!");
    }

    // Delete Student
    pool.query(queries.removeStudent, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send("Student Deleted Successfully!");
    })

  });
};

// Update Student 
const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  // Check if Student id exists using queries.getStudentById
  pool.query(queries.getStudentById, [id], (error, results) => {
    const noStudentFound = !results.rows.length;
    if (noStudentFound) {
      res.send("Cannot Update - Student does not exist in the database!");
    }

    // Update Student
    pool.query(queries.updateStudent, [name, id], (error, results) => {
      if (error) throw error;
      res.status(200).send(`Student's name with id ${id} was updated sucessfully!`);
    });

  });
};


module.exports = {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
}
