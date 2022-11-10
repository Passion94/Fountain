import './index.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

function Navbar(){
return (<div>
<div className="navbar">
    <div >
    <i class='fas fa-bars'> <span id='fountain'>Fountain</span></i>
    
</div>
 <AccountCircleOutlinedIcon className='far fa-user-circle' fontSize='35px'/>
     </div> 
     </div>
);
}

export default Navbar;

