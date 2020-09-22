import React from "react";
import API from "../utils/API";
import UserTable from "../components/UserTable";
import SearchForm from "../components/SearchForm";
import { Card, Container } from "react-bootstrap"

class Directory extends React.Component {

    state = {
        name: "",
        role: "",
        manager: "",
        users:[],
        search: "",
        searchType: "name",
        sort: ""
    }

    updateSearch = (search) => {        
        this.setState( {search} )
    }

    updateSearchType =(searchType)=> {
        this.setState({searchType});
      }

    updateSort = (sort) => {
        this.setState( {sort} )
    }

    componentDidMount () {
        API
            .getUsers()
            .then( res => this.setState( { users: res.data.results } ) )
    }

    render () {
        return (
            <Container>
               
                <Card body>
                    <SearchForm updateSearch={this.updateSearch} />
                </Card>        

                <h2>Employee Directory</h2>        
                
                <UserTable 
                    users = {this.state.users}
                    search = {this.state.search}
                    searchType = {this.state.searchType}
                    sort = {this.state.sort}
                    updateSort = {this.updateSort}
                 />

             </Container>
        )
    }

}

export default Directory;