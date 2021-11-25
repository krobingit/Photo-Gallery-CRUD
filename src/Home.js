import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import icon from './diaryIcon.png';

export function Home() {
  return (
    <div className="Home">
      <div className="TITLEBOX">
        <img className="diaryIcon" src={icon} alt="diary-icon" />
        <h1 className="TITLE">My Diary</h1>
      </div>
      <img src="https://us.123rf.com/450wm/robuart/robuart1903/robuart190300346/124713387-notebook-to-write-memos-and-personal-information-vector-paper-with-spiral-bind-together-pencil-and-e.jpg?ver=6"
        alt="diary" className="diaryPic" />
    </div>
  );
}
export function NotFound() {
  const history = useHistory();
  return (
    <div className="Error">
      <Button variant="contained" style={{ width: "15rem" }} onClick={() => history.push("/")}>Back to Home</Button>
      <img src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
        alt="404-Error" />
    </div>

  );
}
