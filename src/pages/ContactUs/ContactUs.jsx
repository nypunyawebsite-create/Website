import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea name="message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactUs;
