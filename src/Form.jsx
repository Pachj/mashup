import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Form({ fetchData }) {
  const [fromDestination, setFromDestination] = useState("");
  const [toDestination, setToDestination] = useState("");

  return (
    <div>
      <TextField
        label={"starting destination"}
        value={fromDestination}
        onChange={(e) => setFromDestination(e.target.value)}
      />
      <TextField
        label={"end destination"}
        value={toDestination}
        onChange={(e) => setToDestination(e.target.value)}
      />
      <Button
        variant={"contained"}
        onClick={() => fetchData({ from: fromDestination, to: toDestination })}
      >
        Search
      </Button>
    </div>
  );
}
