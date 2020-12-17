import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  constructor() {
    super();
      
    this.user = { //this.user should contain the information that was sent from users-list when triggered
      uname: '',
      firstName: '',
      lastName: '',
      oldPwd: '',
      pwd: ''



      }
  }

  static styles = css`
    .forms {
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    `;

  render () {
    return html`

    <form name="form">
      <div class = "forms">
        <label for="username"> username </label>
        <input name="username" placeholder="${user.uname}"/>
        
      </div>
      <div class = "forms">
        <label for="fistname"> Firstname </label>
        <input name="firstname" placeholder="${user.firstname}"/>
        
      </div>
      <div class = "forms">
        <label for="lastname"> Lastname </label>
        <input name="username" placeholder="${user.lastname}"/>
        
      </div>
      <div class = "forms">
        <label for="password"> Passwrod </label>
        <input name="password" placeholder="${user.oldPwd}"/>
        
      </div>

      <div class="forms"> 
        <button @click=${this.checkFields}>
        Submit
        </button>

      </div>

    </form>



  }

checkFields() { //The ide of this function is to fist check if there is a new password, and to check for which information the user wants to update
  var u = document.forms["form"]["username"].value;
  var f = document.forms["form"]["firstname"].value;
  var l = document.forms["form"]["lastname"].value;
  var p = document.forms["form"]["password"].value;

  if (p == null) {

    oldPwd = ${this.user.pwd}

    fetch('api/updateUser.php', {method: 'POST'})
      .then(respons) => //send information from form to the api, and there it will update the database

  }

  else { //Old password is set as the current password, and the password is changed to be the password typed into the form

    oldPwd = ${this.user.pwd}; 
    Pwd = p;

    fetch('api/updateUser.php', {method: 'POST'})
      .then(respons) => //Add the infromation into the database

  }

}


}
customElements.define('edit-user', EditUser);
