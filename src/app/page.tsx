"use client"
import React, { useEffect, useState } from 'react'

export default function page() {

  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState();
  const [tel, setTel] = useState();

  const handleName = (e: any) => setUserName(e.target.value);
  const handleTel = (e: any) => setTel(e.target.value);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const userObj = {
      name: userName,
      contactNum: tel
    };

    const backendReq = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    });
    if (backendReq.ok) {+
      
      getUsers();
    }
  }

  const getUsers = async () => {
    let response = await fetch("http://localhost:3000/api/users");
    let result = await response.json();
    setUsers(result);
  }

  useEffect(() => {
    getUsers();
  }, []);


  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any, i) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.contactNum}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <br /><br />
      <hr /> <hr />
      <br /><br />
      <div>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="userName">Name :
            <input onChange={handleName} type="text" name="userName" id="userName" placeholder='userName' />
          </label> <br />
          <label htmlFor="userTel">Contact :
            <input onChange={handleTel} type="tel" name="userTel" id="userTel" placeholder='userTel' />
          </label><br />
          <input type="submit" value="Register Now" />
        </form>
      </div>
    </div>
  )
}
