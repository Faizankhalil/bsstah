export const showToast = (message, type) => ({
    type: 'SHOW_TOAST',
    payload: { message, type },
  });