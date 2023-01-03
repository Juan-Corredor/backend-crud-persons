export const querys = {
  getAllPersons: "SELECT * FROM Person",
  getPersonById: "SELECT * FROM Person WHERE id = ?",
  addNewPerson:
    "INSERT INTO Person (names, surnames, document, telephone) VALUES (?, ?, ?, ?)",  
  deletePersonById: "DELETE FROM Person WHERE id= ?",
  updatePersonById:
    "UPDATE Person SET Names = ?, Surnames = ?, Document = ?, Telephone = ? WHERE Id = ?",
};
