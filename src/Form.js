

function Form(){


    return(
        <div>
        
<div>
<img src ="Form-image/image1.svg"/>
</div>

<div  className="container">
            <h1>Enroll For A Course Now.</h1>
            <form >
                <div className="name">
                    <label for="fullname" id="nameLabel" ></label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        placeholder="Full name"
                        tabindex="1" 
                    />
                    </div>
                    <div>
                    
                    <label for="email"></label>
                    <input  
                        type="email" 
                        id="email" 
                        className="email" 
                        placeholder="Email"
                        tabindex="2"  
                    />
                </div>
                <div>
                <label for="phone"></label>
                <input 
                type="number" 
                name="number"
                id="number"
                className="number"
                placeholder="Phone number"
                
                tabindex="3" 
                />
                </div>
                <select id="rolldown"><i class='far fa-snowflake'></i>
			<option value= "list"> List of courses goes here</option>
			<option value= "arts">Arts Studies</option>
			<option value= "education"> Education Studies</option>
			<option value= "computer"> Computer Science</option>
			<option value= "management"> Management Education</option>
			<option value= "health"> Health Sciences</option>
			<option value= "engineering"> Enginerring</option>
</select>
<div>
                <button type="submit" className=" button register">Register</button>
                </div>
            
            </form>
        </div>
</div>




    );
}
export default Form;