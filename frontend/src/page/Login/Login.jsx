export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" />
      <button type="submit">Login</button>
      <button type="button">Register</button>
    </div>
  );
};
