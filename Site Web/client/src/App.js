import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPictureData } from "./feature/pictures.slice";

//useeffect controle le token de l'utilisateur 
//les crochets dans le use effect permette de pas lancer la fonction à l'infini
function App() {
  const [uid, setUid] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchToken = async() => {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      })
        .then((res) => setUid(res.data))
        .catch((err) => console.log("No Token"));
    };
    fetchToken();
    if (uid){
      axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => dispatch(setPictureData(res.data)))
    };
  
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
    </UidContext.Provider>
  );
}

export default App;
/*<div className="App">
<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header>
</div>*/