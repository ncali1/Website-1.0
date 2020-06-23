import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h1 style={{ paddingLeft: "20px" }}>Contact Us</h1>

        <div class="container">
          <form action="action_page.php">
            <label for="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
            />

            <label for="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Your last name.."
            />

            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="emailaddress"
              placeholder="You email.."
            />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}
export default Contact;
