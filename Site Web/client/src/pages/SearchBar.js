import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchUsers, setSearchUsers] = useState(true);
  const [searchPosts, setSearchPosts] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const postsData = useSelector((state) => state.post.post);
  const usersData =  useSelector((state) => state.users.users);

  function handleSearch() {
    const input = searchValue.toLowerCase();
    console.log("Recherche pour : " + input);

    const filteredResultsUsers = usersData.filter(function(item) {
      return item.pseudo.toLowerCase().indexOf(input) !== -1;
    });

    const filteredResultsPosts = postsData.filter(function(item) {
      return item.message.toLowerCase().indexOf(input) !== -1;
    });

    if(searchUsers)
    setSearchResults(filteredResultsUsers);

    if(searchPosts)
    setSearchResults(filteredResultsPosts);

    console.log(searchResults);
  }

  const handleModals = (e) => {
    if (e.target.id === "Users") {
        setSearchUsers(true);
        setSearchPosts(false);
    } else  { 
        setSearchPosts(true);
        setSearchUsers(false);
    }
  }; 

    return (
        <div>
            <Navbar />
            <main>
                <form>
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Rechercher..." />
                    <button type="button" onClick={handleSearch}>Rechercher</button>
                </form>
              <div class="divMenu">
                    <nav role="navigation" class="navProfil">
                        <ul class="navItemsProfil">
                            <li class="navItemProfil">
                                <a class="navLinkProfil" onClick={handleModals} id="Users" >Utilisateur</a>
                            </li>
                            <li class="navItemProfil">
                                <a  class="navLinkProfil" onClick={handleModals} id="Posts" >Postes</a>
                            </li> 
                        </ul>
                     </nav>
              </div>
              { searchUsers &&
                <ul>
                    {searchResults.map((result) => (
                      <li key={result.pseudo}>{result.pseudo}</li>
                    ))}
                </ul>
              }
              { searchPosts &&
                <ul>
                  {searchResults.map((result) => (
                    <li key={result.message}>{result.message}</li>
                  ))}
                </ul>
              }
            </main>
        </div>
    );
};

export default SearchBar;