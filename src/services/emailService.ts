import emailjs from '@emailjs/browser';

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    throw new Error("EmailJS configuration is missing in .env file.");
  }

  try {
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      publicKey
    );
    
    if (response.status === 200) {
      return { success: true, message: "Your message has been sent successfully!" };
    }
    
    throw new Error("Failed to send message");
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw new Error("Something went wrong while sending the email.");
  }
};
