function useUserFilter (searchType, search) {
  
    const filterBySearch = user => {
  
      if (!search) return true;
  
      const getSearchTypeContent = () => {
     
        console.log(searchType)
        const types = {
          name: `${user.name.first} ${user.name.last}`,
          location:  `${user.location.city}, ${user.location.state}`,
          email: `${user.email}`
        };
        return types[searchType];
      };
  
      return getSearchTypeContent().toLowerCase().includes(search.toLowerCase());
  
    }
    return filterBySearch;
  }

  export default useUserFilter;