import "../styles/Login.css"


export default function Login() {
  return (
    <div className="login-container">
      <div className="login-panel">
          <div className="logo">
            <span className="span-1">CSC</span>
            <span className="span-2">DRIVE</span>
          </div>
          <p className="title">Welcome Back!</p>
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="" id="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="" id="password" required/>
            </div>
            <button className="btn login-btn">Login</button>
          </form>
      </div>
    </div>
  );
}
