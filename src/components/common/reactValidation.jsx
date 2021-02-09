// import React, { Component } from "react";
// import Input from "./common/input";

// class LoginForm extends Component {
//   //single source of truth
//   state = {
//     //controled elements cannot have null or undefined value , we set it to empty string
//     account: { username: "", password: "" },
//     errors: {},
//   };

//   //controlled elements (value)

//   // only use Ref when you really need likemanaging focus
//   //of an input field, animation or 3rd parties libraries.
//   //username = React.createRef();

//   //managing focus
//   //   componentDidMount() {
//   //     this.username.current.focus();
//   //   }

//   validate = () => {
//     const errors = {};
//     const { account } = this.state;
//     if (account.username.trim() === "")
//       errors.username = "Username is required";

//     if (account.password.trim() === "")
//       errors.password = "Password is required";

//     return Object.keys(errors).length === 0 ? null : errors;
//   };

//   handleSubmit = (e) => {
//     //preventing full page reload
//     e.preventDefault();
//     const errors = this.validate();
//     console.log(errors);

//     //errors property should always be set to an empty object and not null
//     this.setState({ errors: errors || {} });
//     if (errors) return;

//     //call the server
//     console.log("form submitted");
//   };
//   // destructuring input.name and input.value
//   validateProperty = ({ name, value }) => {
//     if (name === "username") {
//       if (value.trim() === "") return "Username is required";
//     }

//     if (name === "password") {
//       if (value.trim() === "") return "Password is required";
//     }
//   };

//   //handleChange = (e) => {
//   //object destructuring
//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.account };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const account = { ...this.state.account };
//     account[input.name] = input.value;
//     //account[e.currentTarget.name] = e.currentTarget.value;
//     //account.username = e.currentTarget.value;
//     this.setState({ account, errors });
//   };

//   render() {
//     const { account, errors } = this.state;
//     return (
//       <div>
//         <h1>Login</h1>
//         <form onSubmit={this.handleSubmit}>
//           <Input
//             name="username"
//             value={account.username}
//             label="Username"
//             onChange={this.handleChange}
//             error={errors.username}
//           />
//           <div>
//             <Input
//               name="password"
//               value={account.password}
//               label="password"
//               onChange={this.handleChange}
//               error={errors.password}
//             />
//           </div>
//           <button className="btn btn-primary">Login</button>
//         </form>
//       </div>
//     );
//   }
// }

// export default LoginForm;
