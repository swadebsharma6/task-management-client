import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import Container from "../../container/Container/Container";
const variants ={
  initial:{
      y:500,
      opacity: 0
  },
  animate:{
      y: 0,
      opacity: 1,
      transition:{
          duration: 1,
          staggerChildren: 0.1
      }
  },

}


const Contact = () => {



    const form = useRef();
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0qizf4c', 'template_vzkgdzp', form.current, '1hATokjLm5jlRa3gd')
          .then((result) => {
            setSuccess(true)
            console.log(result.text);

          }, (error) => {reset();
             setError(true);
             console.log(error.text);
          });
      };



    return (
        <Container>
        <section>
        <div className=' text-center'>
        <button className='text-4xl font-bold mb-6'>Contact with Me</button>
        </div>

   <motion.div variants={variants} initial='initial' whileInView='animate' className='contact mb-16 md:flex justify-around items-center gap-6 shadow-lg'>
       <motion.div variants={variants} className="text-container p-6 flex-1">
           <motion.h1 variants={variants} className='text-7xl font-bold mb-5'>Lets Works together</motion.h1>
           <motion.div variants={variants}  className="item mb-5">
               <h2 className='text-2xl font-bold'>Email</h2>
               <span className='text-xl'>swadebriva2012@gmail.com</span>
           </motion.div>
           <motion.div variants={variants}  className="item mb-5">
               <h2 className='text-2xl font-bold'>Address</h2>
               <span className='text-xl'>Dhaka, Bangladesh</span>
           </motion.div>
           <motion.div variants={variants}  className="item mb-6">
               <h2 className='text-2xl font-bold'>Phone</h2>
               <span className='text-xl'>+880 1761073247</span>
           </motion.div>
       </motion.div>
       <div className="form-container relative flex-1">
       
       <motion.div initial={{opacity:0}}
       whileInView={{opacity:1}}
        transition= {{delay:2, duration:1}}>
       <form  ref={form} onSubmit={sendEmail}  className="card-body  shadow-lg">
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white text-xl font-bold">Name</span>
         </label>
         <input type="text" name='name' placeholder="Name" className="input input-bordered text-xl text-black" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white text-xl font-bold">Email</span>
         </label>
         <input type="email" name='email' placeholder="Email" className="input input-bordered text-xl text-black" required />
       </div>
       <div className="form-control">
         <label className="label">
           <span className="label-text text-white text-xl font-bold  ">Your Message</span>
         </label>
         <textarea name="message" className="textarea textarea-primary h-32 text-xl text-black" placeholder="Message"></textarea>
       </div>
       <div className="form-control mt-6">
         <button type='submit' className="btn btn-primary">Submit</button>
       </div >
       {error && "Error"}
      <h4 className='text-2xl text-success font-bold'> {success && "Successfully Send !!"}</h4>
     </form>
       </motion.div>
       </div>
   </motion.div>
   </section>
        </Container>
    );
};

export default Contact;