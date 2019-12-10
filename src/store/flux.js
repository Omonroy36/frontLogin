import M from 'materialize-css';
import history from "../views/history";

const getState = ({ getStore, getActions, setStore }) => { 
  return {
      store: {
          user_data: {
              firstname: "",
              lastname: "",
              email: "",
              password:""
          }
      },
      actions: {
    registration: () => {
        const store = getStore();
        fetch("http://localhost:5000/signup", {
          method: "POST",
          body: JSON.stringify(store.user_data),
          headers: { 'Content-Type': 'application/json' }
        }).then(resp => resp.json())
          .then(data => {if(data.success){M.toast({html: 'User created succesully'}); history.push("/login")}})
          .catch(err => console.log(err));
    },
    handleChangeRegistration: (e) => {
       const store = getStore();
       let {user_data} = store;
       user_data[e.target.id] = e.target.value;
       setStore({user_data: user_data});
    },
    submitLogin: (e) => {
        e.preventDefault();
        M.toast({html: 'Im logging in'})
    },
    submitRegistration: (e, history) => {
        e.preventDefault();
        const store = getStore();
        let { user_data } = store;
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        let reEmail = /\S+@\S+\.\S+/;
            if(user_data.password === "" || user_data.firstname === "" || user_data.lastname === "" || user_data.email === ""){
                M.toast({html: 'A form field is currently in blank'})
            } else if(!re.test(user_data.password)){
                M.toast({html: 'Password must contain at least 6 characters long, one uppercase letter and one number.', displayLength:6000})
            } else if(!reEmail.test(user_data.email)){
                M.toast({html: 'Invalid email input'})
            } else{
                getActions().registration();
            }
      }
  }
}
};


export default getState;