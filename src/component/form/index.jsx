import { TextField, Button, Box } from "@mui/material";
import React, { useState } from "react";
import './style.css'

const ReviewForm = () => {
    const [review, setReview] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [rating, setRating] = useState(2.5);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ review, name, email, website, rating });
      alert("Review Submitted!");
    };
  
    return (
      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: "auto", p: 2 }}>
        
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Write your review..."
          variant="outlined"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          sx={{ my: 3 }}
        />

        <div className="d-flex ml-2">

        <TextField className=""
          fullWidth
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mb: 2 }}
        />
  <div id="take-rightone">
  <TextField 
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />

  </div>
        
        </div>
  
        
  
        <TextField
          fullWidth
          label="Website"
          variant="outlined"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          sx={{ mb: 1 }}
        />
  
        <Button type="submit" variant="contained" color="success" >
          Submit Review
        </Button>
      </Box>
    );
  };
  
  export default ReviewForm;