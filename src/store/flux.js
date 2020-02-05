import M from 'materialize-css';
import history from "../views/history";
import Auth from '../helpers/auth';


const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            user_data: {
                firstname: "",
                lastname: "",
                email: "",
                password: ""
            }
        },
        actions: {
            registration: () => {
                const store = getStore();
                fetch("http://localhost:5000/signup", {
                    method: "POST",
                    body: JSON.stringify(store.user_data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(resp => resp.json())
                    .then(data => { if (data.success) { M.toast({ html: 'User created succesfully' }); history.push("/login") } })
                    .catch(err => console.log(err));
            },
            login: () => {
                const store = getStore()
                fetch("http://localhost:5000/login", {
                    method: "POST",
                    body: JSON.stringify({
                        email: store.user_data.email,
                        password: store.user_data.password
                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(resp => resp.json())
                    .then(data => {
                        if (data.success) {
                            M.toast({ html: "Login succesfully" });
                            sessionStorage.setItem("token", data.access_token);
                            //history.push("/");
                        }
                    })
                    .catch(error => console.log(error))
                    if(sessionStorage.getItem("token") !== " "){
                        Auth.authenticated();
                    }
            },
            handleChangeRegistration: (evento) => {
                console.log(evento.target.value);
                const store = getStore();
                let { user_data } = store;
                user_data[evento.target.id] = evento.target.value;
                setStore({ user_data: user_data });
            },
            submitLogin: (e) => {
                e.preventDefault();
                const store = getStore();
                let { user_data } = store;
                let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
                let reEmail = /\S+@\S+\.\S+/;
                if (user_data.password === "" || user_data.email === "") {
                    M.toast({ html: 'A form field is currently in blank' })
                } else if (!re.test(user_data.password)) {
                    M.toast({ html: 'Password must contain at least 6 characters long, one uppercase letter and one number.', displayLength: 6000 })
                } else if (!reEmail.test(user_data.email)) {
                    M.toast({ html: 'Invalid email input' })
                } else {
                    getActions().login();
                }
            },
            submitRegistration: (e, history) => {
                e.preventDefault();
                const store = getStore();
                let { user_data } = store;
                let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
                let reEmail = /\S+@\S+\.\S+/;
                if (user_data.password === "" || user_data.firstname === "" || user_data.lastname === "" || user_data.email === "") {
                    M.toast({ html: 'A form field is currently in blank' })
                } else if (!re.test(user_data.password)) {
                    M.toast({ html: 'Password must contain at least 6 characters long, one uppercase letter and one number.', displayLength: 6000 })
                } else if (!reEmail.test(user_data.email)) {
                    M.toast({ html: 'Invalid email input' })
                } else {
                    getActions().registration();
                }
            }
        }
    }
};

export default getState;