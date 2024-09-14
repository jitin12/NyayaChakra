import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';



function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <nav className="navbar">
          <div className="logo">NyayaChakra</div>
          <ul className="nav-links">
            <li><Button size='large' color='primary'>Home</Button></li>
            <li><Button size='large' color='primary'>Learn</Button></li>
            <li><Button size='large' color='primary'>Games</Button></li>
            <li><Button size='large' color='primary'>About</Button></li>
            <li><Button size='large' variant="outlined" color='secondary'>LogIn</Button></li>
            <li><Button size='large' variant='contained' color='secondary'> SignUp</Button></li>
          </ul>
        </nav>
        <div className='main'>
          <div>

            <div className='text-main'>
              Roll the dice <br /> Know your Rights.
            </div>
            <br />
            <div className='text-desc'>
              Become an informed citizen with <br /> constitutional awareness, <br />
              more empowered and serve our nation better. <br /><br />
              <Button sx={{
                padding: '16px 32px',
                fontSize: '1.5rem'
              }} className='customB' size='large' variant='contained' color='secondary'>Start Learning</Button>
            </div>
          </div>
          <div className='image-main'>
            Image here
          </div>

        </div>
      </div>
    </ThemeProvider>

  );
}

export default App;
