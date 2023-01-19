import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Post from '../components/Post/Post';
import { isEmpty } from '../components/Utils';

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

    return (
        <div>
            <Navbar />
            <main>
            <div className="search-main">
                <form>
                    <input type="text" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Rechercher..." />
                    <button type="button" onClick={handleSearch}>Rechercher</button>
                </form>
                <div className="divMenuSearch">
                      <nav role="navigation" className="navProfil">
 <ul className="navItemsProfil">
                              <li className="navItemProfil">
                                  <a className="navLinkProfil" onClick={handleModals} id="Users" >Utilisateur</a>
                              </li>
                              <li className="navItemProfil">
                                  <a  className="navLinkProfil" onClick={handleModals} id="Posts" >Postes</a>
                              </li> 
 </ul>
                      </nav>
                      { searchUsers &&
                        <ul className='listUsers'>
                            {searchResults.map((result) => (
                              <li key={result.pseudo}>{result.pseudo}</li>
                            ))}
                        </ul>
                      }
                      { searchPosts && 
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
};

export default SearchBar;