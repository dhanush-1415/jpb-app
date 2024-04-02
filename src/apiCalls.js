
import { jpb } from "./config";


export const handleEmployerlogin = async (data) => {

    const url = `${jpb.baseUrl}/EmployerLogIn/GetHelperLogin`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error occurred while sending OTP:', error);
      throw error;
    }
  };

  export const handleHelperlogin = async (data) => {

    const url = `${jpb.baseUrl}/HelperLogIn/GetHelperLogin`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error occurred while sending OTP:', error);
      throw error;
    }
  };


  export const sendRegOTP = async (data) => {
    const url = `${jpb.baseUrl}/SendOTP/SendOTP?OrganizationId=${jpb.OrgId}&Email=${data.Email}&Module=${data.Method}`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error occurred while sending OTP:', error);
      throw error;
    }
  };
  


  export const verifyRegOTP = async (data) => {
    const url = `${jpb.baseUrl}/SendOTP/VerifyOTP`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    };
  
    try {
      const response = await fetch(url, options);
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      console.error('Error occurred while sending OTP:', error);
      throw error;
    }
  };

  
  export const createEmployerUser = async (data) => {
    const url = `${jpb.baseUrl}/EmployerRegistration/Registration`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to make order');
      }
      return response.json();
    } catch (error) {
      console.error('Error making order:', error);
      throw error;
    }
  };


  export const createHelperUser = async (data) => {
    const url = `${jpb.baseUrl}/HelperRegistration/Registration`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Failed to make order');
      }
      return response.json();
    } catch (error) {
      console.error('Error making order:', error);
      throw error;
    }
  };