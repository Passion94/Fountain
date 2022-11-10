import './index.css';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Navbar(){
return (<div>
<div className="navbar">
    <div >
     <span><MenuOutlinedIcon className='fas fa-bars' fontSize='30px'/><span id='fountain'>Fountain</span></span>
    
</div>
 <AccountCircleOutlinedIcon className='far fa-user-circle' fontSize='35px'/>
     </div> 
     </div>
);
}

export default Navbar;

