console.log(" Hello Boss ");

//         -------  delete button  -----------------
const deletePassword = (website) => {
  let data = localStorage.getItem("passwords");
  let arr = JSON.parse(data);
  arrUpdate = arr.filter((e) => {
    return e.website !== website;
  });
  localStorage.setItem("passwords", JSON.stringify(arrUpdate));
  alert(`Data Deleted Scussccesfully  `);
  showPasswords();
};

//  ----------------Displaying the data in the table-------------------
const showPasswords = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null) {
    tb.innerText = "No data found";
  } else {
    tb.innerHTML = `<tr>
                            <th>WebSite-Name</th>
                            <th>User-Name</th>
                            <th>Password</th>
                            <th>Options</th>
                        </tr>`;
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      str += `<tr>
                            <td>${element.website}</td>
                            <td>${element.username}</td>
                            <td>${element.password}</td>
                            <td><button  class="deletebtn" style="cursor: pointer;" onclick="deletePassword('${element.website}')">Delete </button>  </td>                      
                        </tr>`;
    }
    tb.innerHTML = tb.innerHTML + str;
  }
  // reseting the form empty
  username.value = "";
  password.value = "";
  website.value = "";
};
showPasswords();

//  ------------------ getting data from the user and storeing it in a local Storage    ----------------
let getUserData = () => {
  document.getElementById("savebtn").addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(   "UserName : " +   username.value +" ,  website : " +    website.value +",  Password : " +password.value );
    if (username.value && website.value && password.value) {
      let passwords = localStorage.getItem("passwords");
      if (passwords == null) {
        let json = []; //empty array
        json.push({
          // pushing elemts into array
          username: username.value,
          password: password.value,
          website: website.value,
        });
        localStorage.setItem("passwords", JSON.stringify(json));
        alert("data saved Succesfully");
      } else {
        let json = JSON.parse(localStorage.getItem("passwords"));
        json.push({
          username: username.value,
          password: password.value,
          website: website.value,
        });

        localStorage.setItem("passwords", JSON.stringify(json));
        alert("Data saved Succesfully.Refresh the browser to see data");

        // reseting the form empty
        username.value = "";
        password.value = "";
        website.value = "";
      }
    } else {
      alert("Username and Passwords should not be empty ");
    }
  });
};
getUserData();
