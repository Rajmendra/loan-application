// frontend/src/services/apiService.js
import { APPLY_LOAN_URL } from '../constants/apiUrls';

const applyLoan = async (formData) => {
  try {
    const response = await fetch(APPLY_LOAN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};

const apiService = {
  applyLoan,
};

export default apiService;