 const accessToken = () =>{
  const responseString = localStorage.getItem("authUser");
  if (responseString) {
    const response = JSON.parse(responseString);
    const token = response.data.data.accessToken;
    localStorage.setItem('accessToken', token);
    return token
  } else {
    console.log("not login")
  }

} 

export default accessToken

// const accessToken =
//   "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6ImFkbWluIiwiYWRtaW4iOnRydWUsImp0aSI6ImQ2MTEwYzAxLWMwYjUtNDUzNy1iNDZhLTI0NTk5Mjc2YjY1NiIsImlhdCI6MTU5MjU2MDk2MCwiZXhwIjoxNTkyNTY0NjE5fQ.QgFSQtFaK_Ktauadttq1Is7f9w0SUtKcL8xCmkAvGLw"
// export default accessToken
