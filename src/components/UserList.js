import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList() {
  const [users, setusers] = useState();
  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setusers(res.data);
        console.log(users);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {users ? (
        users.map((el) => (
          <div>
            <h1>{el.name}</h1>
          </div>
        ))
      ) : (
        <img src="https://media.tenor.com/UnFx-k_lSckAAAAM/amalie-steiness.gif" />
      )}
    </div>
  );
}

export default UserList;
