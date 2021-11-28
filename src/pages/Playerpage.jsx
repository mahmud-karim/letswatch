import TextField from "@mui/material/TextField";
import React from "react";
import Navbar from "../components/navbar";

export default function Playerpage() {
  return (
    <div>
      <Navbar />
      <h1>Player Page </h1>
      <label>Big Buck Bunny</label>
      <br />
      <video width="640" height="360" controls>
        <source src="https://ipfs.fleek.co/ipfs/QmbGtJg23skhvFmu9mJiePVByhfzu5rwo74MEkVDYAmF5T"></source>
        Your browser does not support the video tag.
      </video>
      <br />
      <TextField
        fullWidth
        id="outlined-basic"
        label="Enter You IPFS CID"
        variant="outlined"
      />
    </div>
  );
}
