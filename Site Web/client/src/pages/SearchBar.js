import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Post from '../components/Post/Post';
import { isEmpty } from '../components/Utils';
import MiniProfil from "../components/MiniProfil";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchUsers, setSearchUsers] = useState(true);
  const [searchPosts, setSearchPosts] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const posts = useSelector((state) => state.post.post);
  const users =  useSelector((state) => state.users.users);

  const filteredResultsPosts = posts.filter(function(item) {
    return item.tags.some(function(tag) {
      return tag.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });
  });

  const filteredResultsUsers = users.filter(function(item) {
    return item.pseudo.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
  });


  function handleSearch() {


    const input = searchValue.toLowerCase();
    console.log("Recherche pour : " + input);

    if(searchUsers && searchValue !== "")
        setSearchResults(filteredResultsUsers);
    else if(searchPosts && searchValue !== "")
        setSearchResults(filteredResultsPosts);
  }

  const handleModals = (e) => {
    if (e.target.id === "Users") {
        setSearchUsers(true);
        setSearchPosts(false);
        if(searchValue !== "")
            setSearchResults(filteredResultsUsers);
    } else  { 
        setSearchPosts(true);
        setSearchUsers(false);
        if(searchValue !== "")
            setSearchResults(filteredResultsPosts);
    }
  }; 

  try {
        return (
            <div>
                <Navbar/>
                <main>
                    <div className="search-main">
                       
                            {/* <form>
                            <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}
                                   placeholder="Rechercher..."/>
                            <button type="button" onClick={handleSearch}>Rechercher</button>
                        </form> */}
                        <div class="Card">
                            <div class="CardInner">
                                <div class="container">
                                    <form> 
                                        <div className="search-form">
                                        <button type="button" onClick={handleSearch} class="Icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#657789" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                                    </button>
                                    <div class="InputContainer">
                                    <input  type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Rechercher..."/>
                                    </div>
                                    </div>
                                    </form>
                                    
                                </div>
                                </div>
                            
                        </div>
                        
                        <div className="divMenuSearch listContent">
                            <nav role="navigation" className="navProfil">
                                <ul className="navItemsProfil">
                                    <li className="navItemProfil">
                                        <a className="navLinkProfil" onClick={handleModals} id="Users">Utilisateur</a>
                                    </li>
                                    <li className="navItemProfil">
                                        <a className="navLinkProfil" onClick={handleModals} id="Posts">Postes</a>
                                    </li>
                                </ul>
                            </nav>
                            {searchUsers &&
                                <ul className='listUsers'>
                                    {searchResults.map((result) => (
                                        <MiniProfil key={result._id} uid={result._id}></MiniProfil>
                                    ))}
                                </ul>
                            }
                            {searchPosts &&
                                <ul className='listUsers'>
                                    {searchResults.length !== 0 && searchResults.map((result) => (
                                        <Post post={result} key={result._id}/>
                                    ))}
                                </ul>
                            }
                        </div>
                    </div>
                </main>
            </div>
        );
    }
    catch (error){
        return <p>Loading...</p>;
    }
};

export default SearchBar;