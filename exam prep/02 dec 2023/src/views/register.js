import { register } from "../data/users.js";
import { html, page, render } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const registerTemplate = (handler) => html`
<section id="register">
<div class="form">
  <img class="border" src="./images/border.png" alt="" />
  <h2>Register</h2>
  <form @submit = ${handler} class="register-form">
    <input
      type="text"
      name="email"
      id="register-email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      id="register-password"
      placeholder="password"
    />
    <input
      type="password"
      name="re-password"
      id="repeat-password"
      placeholder="repeat password"
    />
    <button type="submit">register</button>
    <p class="message">Already registered? <a href= "/login">Login</a></p>
  </form>
  <img class="border" src="./images/border.png" alt="" />
</div>
</section>
`;

export async function showRegister() {

    const handler = createSubmitHandler(onSubmit);

    render(registerTemplate(handler))
};

async function onSubmit(data, form) {

    const { email, password } = data;
    const rePass = data['re-password']

    if (!email || !password || password != rePass) {
        return alert('invalid inputs');
    }

    await register(email, password);

    if (localStorage.user) {
        page.redirect('/');
    } else {
        return alert('register failed')
    }
}