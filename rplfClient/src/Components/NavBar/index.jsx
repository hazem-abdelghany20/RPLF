import { useEffect, useState, useRef  } from "react";
import axios from 'axios';
import NavButton from "../NavButton";
import { TextField, IconButton , Button, List, ListItem, ListItemText, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const NavBar = ({ items, docs }) => {
    const [data, setData] = useState(null);
<<<<<<< HEAD
    const [searchEntry, setSearchEntry] = useState('');
    const [searchResults, setSearchResults] = useState({ mainLinks: [], pageNames: [] });
    const [showResults, setShowResults] = useState(false); // New state to control results visibility
    const resultsRef = useRef(null);
    const totalWidth = window.innerWidth;
    const buttonWidth = 80; 
    const buttonCount = 9;
    const spaceBetweenButtons = (totalWidth - (buttonCount * buttonWidth)) / (buttonCount + 1);


    const callApi = async () => {
        const response = await axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1');
        setData(response.data["main-links"]);
    };
=======
>>>>>>> 52f179e33520e57b70a401fe341f459e14857d70

    useEffect(() => {
        const callApi = async () => {
            const response = await axios.get('http://localhost:3000/api/globals/nav-bar?locale=undefined&draft=false&depth=1');
            setData(response.data["main-links"]);
        };
        callApi();

        const handleClickOutside = (event) => {
            if (resultsRef.current && !resultsRef.current.contains(event.target)) {
              setShowResults(false);
            }
          };
      
          // Add event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Remove event listener on cleanup
            document.removeEventListener("mousedown", handleClickOutside);
          };

    }, [resultsRef]);



    const formatName = (name) => {
        return name
          .replace(/[_-]/g, ' ') // Replace underscores/hyphens with spaces
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!searchEntry) return;
        setShowResults(false); // Reset results visibility before searching
    
        try {
          const response = await axios.post('http://localhost:3000/api/search', { entry: searchEntry });
          const { mainLinks, pageNames } = response.data;
          setSearchResults({ mainLinks, pageNames });
          console.log(searchResults);
          setShowResults(true);
        } catch (error) {
          console.error("Search API call failed:", error);
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchEntry);
      };

      const hasContentToShow = searchResults.pageNames.length > 0 || 
        Object.entries(searchResults.mainLinks).some(([_, linkDetails]) => linkDetails.pages.length > 0);
    

<<<<<<< HEAD
    if (data !== null) {
        return (
            <div className="navbar">
                {data.map((item, index) => {
                    switch (item.link) {

                        case "About Us":
                            const leftPosition = spaceBetweenButtons * (index + 1) + buttonWidth * index;

                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "about_us")} maxWidth={totalWidth} />
                            )
                        case "Practice Areas":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "practice_areas")} />
                            )
                        case "People":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "people")} />
                            )
                        case "Partners In Success":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "partners_in_success")} />
                            )
                        case "Immigration":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "immigration")} />
                            )
                        case "Legal Translation":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "legal_translation")} />
                            )
                        case "Careers":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "careers")} />
                            )
                        case "Laws & News":
                            return (
                                <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to == "laws_&_news")} />
                            )
                        case "Contact Us":
                            return (
                                <NavButton id={9} key={index} title={item.link} width={150}  height={200} pages={docs.filter(page => page.linked_to == "contact_us")} />
                            )


                    }
                })}
                <div>
                    <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <TextField
                        variant="outlined"
                        size="small"
                        value={searchEntry}
                        onChange={(e) => setSearchEntry(e.target.value)}
                        style={{ backgroundColor: 'white', marginRight: '8px', width: '100%', maxWidth: '400px' }}
                        InputProps={{
                            disableUnderline: true,
                            style: { border: 'none', outline: 'none' },
                        }}
                        placeholder="Search..."
                        />
                        <IconButton type="submit" style={{ backgroundColor: 'transparent', padding: '10px' }}>
                        <SearchIcon />
                        </IconButton>
                    </form>
                    {showResults && (
                    <div ref={resultsRef}>
                        {hasContentToShow ? (
                        <Paper style={{ position: 'absolute', marginTop: '8px', width: 'calc(100% - 32px)', maxWidth: '400px' }}>
                            <List component="nav" aria-label="search results">
                            {searchResults.pageNames.map((pageName, index) => (
                                <ListItem button key={index} onClick={() => window.location.href = `/${pageName[1]}`}>
                                <ListItemText primary={formatName(pageName[0])} />
                                </ListItem>
                            ))}
                            {Object.entries(searchResults.mainLinks).map(([mainLinkName, linkDetails], index) => (
                                linkDetails.pages.length > 0 && linkDetails.pages.map((page, pageIndex) => (
                                <ListItem button key={`${mainLinkName}-${pageIndex}`} onClick={() => window.location.href = `/${page}`}>
                                    <ListItemText primary={`${formatName(page)} (Under ${formatName(mainLinkName)})`} />
                                </ListItem>
                                ))
                            ))}
                            </List>
                        </Paper>
                        ) : (
                        <Paper style={{ position: 'absolute', marginTop: '8px', width: 'calc(100% - 32px)', maxWidth: '400px', padding: '10px' }}>
                            No results found.
                        </Paper>
                        )}
                    </div>
                    )}
=======
    return (
        // Adjusted for centering
        <div className="hidden lg:block absolute w-4/5 left-1/2 top-[12rem] bg-[#063948] bg-opacity-70 transform -translate-x-1/2">
            <div className="flex flex-row justify-between">
                {data && data.map((item, index) => {
                    return (
                        <NavButton key={index} title={item.link} width={150} height={200} pages={docs.filter(page => page.linked_to === item.link.toLowerCase().replace(/\s/g, '_'))} maxWidth={window.innerWidth} />
                    );
                })}
                <div>
                <button className="bg-transparent my-3 relative flex justify-center items-center h-12 w-12">
    <img src='search-icon.svg' alt='search icon' className="size-8 absolute top-1/2 left-3 transform -translate-x-1/2 -translate-y-1/2"/>
</button>

>>>>>>> 52f179e33520e57b70a401fe341f459e14857d70
                </div>

            </div>
        </div>
    );
};

export default NavBar;
