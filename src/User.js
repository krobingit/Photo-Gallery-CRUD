import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
export function User({ name, username, email, about, displaypic, id }) {



  return (
   <section className="User">
    <Card sx={{
        maxWidth: 300,padding:"1.5rem",boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
      }}>
     <img className="dp" src={displaypic} alt="profilepic" />
     <h1 className="name">{name}</h1>
     <CardContent>
      <Button variant="outlined">View Profile</Button>
      <h2 className="sub-head">Username</h2>
      <p className="info">{username}</p>
       <h2 className="sub-head">Email</h2>
      <p className="info">{email}</p>
       <h2 className="sub-head">Bio</h2>
      <p className="info">{about}</p>
     </CardContent>
     <CardActions >

     </CardActions>
 </Card>
    </section>
  );

}
