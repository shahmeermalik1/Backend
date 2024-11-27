const Shift = require("../models/Shift");


  

 

  const postShift = async (req, res) => {
    try {
      const { job, date, hours } = req.body;
  
      if (!job || !date || hours == null) {
        return res.status(400).json({ error: "Missing required fields or invalid input data" });
      }
  
      const parsedDate = new Date(date);
      if (isNaN(parsedDate)) {
        return res.status(400).json({ message: "Invalid date format" });
      }
  
      const existingShift = await Shift.findOne({ job, date: parsedDate });
  
      if (existingShift) {
        existingShift.hours = hours;
        await existingShift.save();
        return res.status(200).json(existingShift);
      } else {
        const newShift = new Shift({ job, date: parsedDate, hours });
        await newShift.save();
        return res.status(201).json(newShift);
      }
    } catch (err) {
      console.error("Error in postShift:", err);
      res.status(500).json({ error: "An unexpected error occurred while creating or updating a shift" });
    }
  };
  

  
  const getShift = async (req, res) => {
    try {
      const { job, startDate, endDate } = req.query;
  
      const query = {};
      if (job) query.job = job;
      if (startDate || endDate) {
        query.date = {};
        if (startDate) query.date.$gte = new Date(startDate);
        if (endDate) query.date.$lte = new Date(endDate);
      }
  
      const shifts = await Shift.find(query).sort({ date: 1 });
  
     
  
      return res.status(200).json({ shifts });
    } catch (error) {
      console.error("Error in getShift:", error);
      res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
  };
  

  module.exports = {getShift: getShift , postShift: postShift}