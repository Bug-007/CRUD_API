const pool = require("../dbConnetion");

const getAllContacts = async (req, res) => {
  await pool.query("SELECT * FROM CONTACTS", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result.rows);
    }
  });
};

const createContact = async (request, response) => {

  const {id , first_name, last_name, email, mobile_number} = request.body;
  
    await pool.query('INSERT INTO CONTACTS (id, first_name, last_name, email, mobile_number) VALUES ($1, $2, $3,$4, $5)', [id, first_name, last_name, email, mobile_number], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }


  const updateContact = async (request, response) => {

    const {id , first_name, last_name, email, mobile_number} = request.body;

    await pool.query('UPDATE contacts SET first_name = $1, last_name = $2, email = $3, mobile_number = $4 WHERE id = $5', [first_name, last_name, email, mobile_number, id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows)
    })
  }

  const deleteContact = async (request, response) => {

    const id = request.body.id;

    await pool.query('DELETE FROM contacts WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json({message:"Success"})
    })
  }


module.exports = { getAllContacts, createContact, updateContact, deleteContact };
