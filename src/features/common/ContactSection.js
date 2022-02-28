import React from 'react';

class ContactSection extends React.PureComponent{
    render(){

        return(
            <div className='contact-section'>
                <div>
                    <span className='title -text white-text'>Contact Us</span>
                </div>

                <div className='dot-line-container'>
                    <div className='dot'></div>
                    <div className='line'></div>
                </div>

                <div className='desc' >
                     <span className='white-text' >If you want to discuss and plan your business goals, Awesome! We love supporting our customers in differnet areas and guide them appropriatly to boost thei Business.</span>
                 </div>

                <div className='form-header'>
                    <span className='sub-title white-text '>Send your query!</span>

                </div >

              
                <div className='form'>

                <div className='numbers white-text '>
                    
                    <span>741852960</span>
                    <span>741855965</span>
                    <span>748596321</span>
                </div>
                <div>
                    <form>
                    <input type="text" placeholder='Enter Name'></input>
                    <input type="text" placeholder='Enter Number'></input>
                    <input type="email" placeholder='Enter Email' ></input>
                    <input type="text" placeholder=' Enter Comment'></input>
                    <input type="submit" placeholder="submit"></input>



                        
                    </form>
                    
                </div>
                <div className='address'> 

                <span className='white-text'>2nd Floor | Al Burj complex <br/> Opposite Govt. Boys Degree College <br/> Pulwama</span>
                
                </div>

                </div>
                




            </div>
        )
    }
    
}
export default ContactSection
