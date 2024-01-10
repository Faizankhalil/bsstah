 const accessToken = () =>{
  const responseString = localStorage.getItem("authUser");
  if (responseString) {
    const response = JSON.parse(responseString);
    const token = response.data.data.accessToken;
    const accessToken = `Bearer ${token}`
    localStorage.setItem('accessToken', accessToken);
    return accessToken
  } else {
    console.log("not login")
  }

} 

export default accessToken

