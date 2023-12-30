import { put, takeEvery } from 'redux-saga/effects';
import toastr from "toastr";
import "toastr/build/toastr.min.css";

function* handleShowToast(action) {
  const { message, type } = action.payload;
  console.log(action,"from toast")

  toastr.options = {
    positionClass: "toast-top-right",
    timeOut: 3000,
    extendedTimeOut: 1000,
    closeButton: true,
    progressBar: true,
    newestOnTop: true,
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    showDuration: 300,
    hideDuration: 1000
  };

  // Show toast notification
  if (type === 'success') {
    toastr.success(message);
  } else if (type === 'error') {
    toastr.error(message);
  } else {
    toastr.info(message);
  }
}

export function* watchShowToast() {
  yield takeEvery('SHOW_TOAST', handleShowToast);
}