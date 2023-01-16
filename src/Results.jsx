import { Card } from '@mui/material';

export default function Results({ connections }) {
  return (
    <div>
      {connections.map((connection) => {
        return (
          <Card>
            <p>{connection.duration}</p>
          </Card>
        );
      })}
    </div>
  );
}
