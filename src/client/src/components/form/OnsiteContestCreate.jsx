import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
// import { useSelector } from "react-redux";

const OnsiteContestCreate = ({ open, handleClose }) => {
//   const { token } = useSelector((state) => state.login);
  const [newJudge, setNewJudge] = useState({
    contestName: '',
    link: '',
    teamName: '',
    rank: ''
  });

  const handleChange = (e) => {
    setNewJudge({ ...newJudge, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(newJudge)
      const response = await axios.post('http://localhost:3000/experience/onsite-contest', newJudge);
      console.log('Response:', response.data);
      toast.success('Onsite contest added successfully!');
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      if (error.response && error.response.status === 401) {
        toast.error('Unauthorized. Please log in again.');
      } else {
        toast.error('Registration failed. Please try again.');
      }
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Onsite contest</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="contestName"
          label="Contest Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="link"
          label="Constest Link"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="rank"
          label="contest rank"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
     
        <TextField
          margin="dense"
          name="teamName"
          label="Team Name"
          type="test"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OnsiteContestCreate;
