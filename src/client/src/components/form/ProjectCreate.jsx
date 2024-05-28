import React, { useState } from "react";
import axios from "axios";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { toast } from "react-toastify";

const ProjectCreate = ({ open, handleClose }) => {
  const [newProject, setNewProject] = useState({
    name: '',
    technology: '',
    link: ''
  });

  const handleChange = (e) => {
    setNewProject({ ...newProject, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/experience/project', newProject);
      console.log('Response:', response.data);
      toast.success('project added')
      handleClose();
    } catch (error) {
      console.error('Error:', error);
      alert('project not added.');
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add New Project</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          name="name"
          label="Project Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="technology"
          label="Technology"
          type="text"
          fullWidth
          variant="standard"
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="link"
          label="Project Link"
          type="text"
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

export default ProjectCreate;
