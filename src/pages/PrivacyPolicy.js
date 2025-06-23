import React from 'react';

const responsiveStyle = `
@media (max-width: 900px) {
  .privacy-container { max-width: 98vw !important; padding: 24px 8px !important; }
  .privacy-container h1 { font-size: 2rem !important; margin-top: 10vh !important; }
  .privacy-container h2 { font-size: 1.15rem !important; }
  .privacy-container p, .privacy-container li { font-size: 1rem !important; }
}
@media (max-width: 600px) {
  .privacy-container { padding: 12px 2vw !important; border-radius: 8px !important; }
  .privacy-container h1 { font-size: 1.3rem !important; margin-top: 7vh !important; }
  .privacy-container h2 { font-size: 1rem !important; }
  .privacy-container p, .privacy-container li { font-size: 0.98rem !important; }
}
`;

const PrivacyPolicy = () => (
    <div className="privacy-container" style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 40px', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px #0001', lineHeight: 1.8 }}>
        <style>{responsiveStyle}</style>
        <h1 style={{ color: '#000099', fontWeight: 'bold', fontSize: '2.5rem', marginBottom: 40, marginTop: '16vh', textAlign: 'center', letterSpacing: '1px' }}>
            Terms and Conditions & Privacy Policy
        </h1>
        <p style={{ fontSize: '1.15rem', marginBottom: 32 }}>Welcome to <b>Nypunya Aesthetics Clinic</b> </p>
        <p style={{ fontSize: '1.15rem', marginBottom: 40 }}>
            These Terms and Conditions (“Terms”) govern your use of our website located at{' '}
            <a href="https://nypunyaaesthetics.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#000099', textDecoration: 'underline' }}>
                https://nypunyaaesthetics.com/
            </a>{' '}
            (the “Website”). By accessing or using our Website, you agree to comply with and be bound by these Terms. If you do not agree with these Terms, please do not use our Website.
        </p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>1. Use of the Website</h2>
        <p style={{ marginBottom: 16 }}><b>1.1 Eligibility:</b> To use this Website, you must be at least 18 years old or have the consent of a parent or guardian.</p>
        <p style={{ marginBottom: 32 }}><b>1.2 User Responsibilities:</b> You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of or restrict or inhibit anyone else's use and enjoyment of the Website.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>2. Services</h2>
        <p style={{ marginBottom: 32 }}><b>2.2 No Medical Advice:</b> The information provided on our Website is for general informational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your dentist or other qualified health provider with any questions you may have regarding a medical condition.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>3. Appointment Scheduling</h2>
        <p style={{ marginBottom: 16 }}><b>3.1 Online Requests:</b> If you request an appointment through our Website, please be aware that submitting a request does not guarantee an appointment. We will contact you to confirm the date and time.</p>
        <p style={{ marginBottom: 32 }}><b>3.2 Cancellation and Rescheduling:</b> Please notify us as soon as possible if you need to cancel or reschedule an appointment. We reserve the right to charge a cancellation fee for missed appointments as outlined in our clinic's policy.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>4. Intellectual Property</h2>
        <p style={{ marginBottom: 16 }}><b>4.1 Content Ownership:</b> All content on the Website, including text, graphics, logos, and images, is the property of Nypunya Aesthetic Clinic or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.</p>
        <p style={{ marginBottom: 32 }}><b>4.2 Usage Rights:</b> You may view and print content from the Website for personal, non-commercial use only. You may not reproduce, distribute, or otherwise use any content from the Website without our prior written consent.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>5. Privacy Policy</h2>
        <p style={{ marginBottom: 32 }}><b>5.1 Personal Information:</b> Your use of the Website is also governed by our Privacy Policy, which explains how we collect, use, and protect your personal information. By using the Website, you consent to our Privacy Policy.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>6. Disclaimers and Limitation of Liability</h2>
        <p style={{ marginBottom: 16 }}><b>6.1 No Warranty:</b> The Website is provided "as is" and "as available" without any warranties of any kind, either express or implied. Nypunya Aesthetic Clinic does not warrant that the Website will be available at all times or that it will be free from errors or viruses.</p>
        <p style={{ marginBottom: 32 }}><b>6.2 Limitation of Liability:</b> To the fullest extent permitted by law, Nypunya Aesthetic Clinic shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the Website.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>7. Changes to Terms</h2>
        <p style={{ marginBottom: 32 }}><b>7.1 Modifications:</b> We may update these Terms from time to time. We will post any changes on this page and, if the changes are significant, we will provide a more prominent notice. Your continued use of the Website after any changes signifies your acceptance of the revised Terms.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>8. Governing Law</h2>
        <p style={{ marginBottom: 32 }}><b>8.1 Jurisdiction:</b> These Terms are governed by and construed in accordance with the laws of Karnataka, India. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Karnataka, India.</p>
        <h2 style={{ color: '#000099', fontWeight: 600, fontSize: '1.5rem', marginTop: 48, marginBottom: 16 }}>9. Contact Us</h2>
        <p style={{ marginBottom: 0 }}><b>9.1 Inquiries:</b> If you have any questions about these Terms or the Website, please contact us at <a href="mailto:clinic.nypunyaaesthetic@gmail.com" style={{ color: '#000099', textDecoration: 'underline' }}>clinic.nypunyaaesthetic@gmail.com</a> or call us at <a href="tel:+919738545945" style={{ color: '#000099', textDecoration: 'underline' }}>+91-97385 45945</a></p>
    </div>
);

export default PrivacyPolicy; 