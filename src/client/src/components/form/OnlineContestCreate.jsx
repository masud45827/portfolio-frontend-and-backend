import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';
// import { useSelector } from "react-redux";

const OnlineContestCreate = ({ open, handleClose }) => {
//   const { token } = useSelector((state) => state.login);
  const [newJudge, setNewJudge] = useState({
    name: '',
    link: '',
    handle: '',
    maxrating: 0,
    solve: 0
  });

  const handleChange = (e) => {
    setNewJudge({ ...newJudge, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(newJudge)
      const response = await axios.post('http://localhost:3000/experience/online-contest', newJudge);
      console.log('Response:', response.data);
      toast.success('Online judge added successfully!');
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
      <DialogTitle>Add New Judge</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          autoFocus
          margin="dense"
          name="link"
          label="Link"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="handle"
          label="Handle"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="maxrating"
          label="Max Rating"
          type="number"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="solve"
          label="Number of Problems Solved"
          type="number"
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

export default OnlineContestCreate;
