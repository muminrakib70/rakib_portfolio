import React, { useState } from 'react'

function ContactRight() {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        email: '',
        subject: '',
        message: '',
      });

    
      const [errors, setErrors] = useState({});

      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
          } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';}
        if (!formData.contact.trim()) newErrors.contact = 'Contact is required';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        return newErrors;
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          alert('Form submitted successfully!');
          // Here you can send the formData to your server
          setFormData({ name: '', contact: '', email: '', subject: '', message: '' });
          setErrors({});
        } else {
          setErrors(validationErrors);
        }
      };
    
    
    return (
        <div className='lgl:w-[60%] w-full flex flex-col justify-center gap-6 lgl:p-8 p-4 h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne  '>
            <form className='w-full flex flex-col gap-6 p-2' action="" onSubmit={handleSubmit}>
                <div className='w-full flex-col lgl:flex-row '>
                    <div className='w-full lgl:w-1/2 flex flex-col gap-3'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>YOUR NAME </p>
                        <input name="name" value={formData.name} onChange={handleChange} type="text" className='contactInput' />
                        {errors.name && <p className='text-sm text-designColor'>{errors.name}</p>}
                    </div>
                    <div className='w-full lgl:w-1/2 flex flex-col gap-3 mt-6 lgl:mt-0'>
                        <p className='text-sm text-gray-400 uppercase tracking-wide'>Your Contact </p>
                        <input type="text" name="contact" value={formData.contact} onChange={handleChange}  className='contactInput' />
                        {errors.contact && <p className='text-sm text-designColor'>{errors.contact}</p>}
                    </div>
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide '>Your E-MAil </p>
                    <input type="text" name="email" value={formData.email} onChange={handleChange} className='contactInput' />
                      {errors.email && <p className='text-sm text-designColor'>{errors.email}</p>}
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'>Subject </p>
                    <input name="subject" value={formData.subject} onChange={handleChange} type="text" className='contactInput' />
                    {errors.subject && <p className='text-sm text-designColor'>{errors.subject}</p>}
                </div>
                <div className='w-full flex flex-col gap-3'>
                    <p className='text-sm text-gray-400 uppercase tracking-wide'> Your Massage  </p>
                    <textarea className='textInput' cols="30" rows="6" value={formData.message} onChange={handleChange} name="message">
                    </textarea>
                    {errors.message && <p className='text-sm text-designColor'>{errors.message}</p>}
                </div>
                <div className='w-full '>
                    <button className='buttonInput' type="submit">Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactRight
