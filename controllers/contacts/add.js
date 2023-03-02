const { Contact } = require("../../models");

const add = async (req, res) => {
  const { _id } = req.user
  const { name, email, phone } = req.body;
  const newContact = email ? { name, email, phone } : { name, phone };
   const contact = await Contact.create({ ...newContact, owner: _id });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { contact },
  });
};

module.exports = add;
