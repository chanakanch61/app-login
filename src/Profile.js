import { useState, useEffect } from "react";

function Profile() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiNSIsImNyZWF0ZWRBdCI6IjIwMjItMDYtMjBUMDI6MDY6MzIuNjQ3WiIsInVwZGF0ZWRBdCI6IjIwMjItMDctMDFUMDU6MjA6MzYuOTgyWiIsImRlbGV0ZWRBdCI6bnVsbCwiZW1wbG95ZWVJZCI6IjAwMDAiLCJ1c2VybmFtZSI6IkRFVlVTRVIiLCJmaXJzdG5hbWUiOiIiLCJsYXN0TmFtZSI6IiIsIm5pY2tuYW1lIjoiIiwidGVhbSI6IkIiLCJyb2xlIjoiQURNSU4iLCJpc0FjdGl2ZSI6dHJ1ZX0sImlhdCI6MTY1ODQ3Mzk0NSwiZXhwIjoxNjU4NTE3MTQ1fQ.EzN8T4vI_DBDvc_-LpJlzGgPeBxYlGo953aogHliM0g"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("http://api.nitirat.co.th/user/profile", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <span>{JSON.stringify(users)}</span>
    </div>
  );
}
export default Profile;
