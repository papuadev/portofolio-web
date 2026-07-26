// Minimal mock email service implementation for MVP
// In a real app, you would use emailjs-com package

export interface EmailData {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; message: string }> => {
  // Simulate network request
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Basic validation
      if (!data.name || !data.email || !data.message) {
        reject(new Error("All fields are required"));
        return;
      }
      
      // Simulate successful send
      resolve({ success: true, message: "Your message has been sent successfully!" });
    }, 1500);
  });
};
