import React, {useState} from "react";
import { authService } from "../fBase";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setnewAccount] = useState(false);

  const emailHandler = (event) => {
      setEmail(event.target.value)
  }
  const passwordHandler = (event) => {
      setPassword(event.target.value)
   }

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        //이메일과 비밀번호를 사용하여 로그인하기
        data = await authService.signInWithEmailAndPassword(email, password);
      } else {
        //지정된 이메일 주소 및 비밀번호와 관련된 새 사용자 계정을 만든 후 애플리케이션에도 로그인이 됨
        data = await authService.createUserWithEmailAndPassword(email, password);
      }
    } catch (error){
      console.log(error)
    }
  };

  const toggleAccount = () => setnewAccount(prev => !prev);

  return (
    <div>
      <form>
        <input 
        type="text" 
        name="email" 
        placeholder="Email" 
        value={email}
        onChange={emailHandler} 
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        <button onClick={onSubmit}>{newAccount ? "Sign In" : "create Account"}</button>
        <button onClick={toggleAccount}>{newAccount ? "Go Create Account" : "Go Sign In"}</button>
      </form>
      <div>
        <button>with Google</button>
        <button>with Github</button>
      </div>
    </div>
  )


};

export default Auth;