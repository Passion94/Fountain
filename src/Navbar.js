import './index.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar(){
return (<div>
<div className="navbar">
    <div >
     <span id='bars-container'><MenuOutlinedIcon className='fas fa-bars' fontSize='30px'/><span id='fountain'>Fountain</span></span>
</div>
<div className='hidden-Navbar-links'>
<a href="#" className='Navbar-links'> Home</a>
<a href="#" className='Navbar-links'> Courses</a>
<a href="#" className='Navbar-links'> Instructors</a>
<a href="#" className='Navbar-links'> Schedules</a>
<a href="#" className='Navbar-links'>Contact us</a>
<div className='searchbar'>
<a href="#" className='Navbar-links1' id='search'><SearchOutlinedIcon/></a>
<a href="#" className='Navbar-links1' id='login'>Login</a> 
<a href="#" className='Navbar-links1' id='register'>Register</a> 
</div>
</div>
<div>
 <AccountCircleOutlinedIcon className='far fa-user-circle' fontSize='35px'/>
     </div> 
     </div>
     </div>
);
}

export default Navbar;

