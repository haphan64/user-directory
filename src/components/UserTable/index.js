import React from 'react';
import useUserFilter from "../../utils/hooks/useUserFilter";
import useLocationSort from "../../utils/hooks/useLocationSort";
import { Table } from "react-bootstrap";

function UserTable ({ users, searchType, search, sort, updateSort }) {

    const filterBySearch = useUserFilter(searchType, search );

    const sortByLocation = useLocationSort (sort);   
       
    return (

        <Table striped bordered hover>
            <thead>
                <tr>                    
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone #</th>
                    <th scope="col">
                        Location
                        <button onClick={() => updateSort("asc")}>Asc</button>
                        <button onClick={() => updateSort("desc")}>Desc</button>
                    </th>
                    
                                                      
                </tr>
            </thead>
            <tbody>
                {users.filter( filterBySearch ).sort( sortByLocation ).map(user => {
                    return (
                        <tr key={user.id.value}>
                            <td>{user.name.first}</td>
                            <td>{user.name.last}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.location.city}, {user.location.state}</td>
                        </tr>
                    )  
                })}
                
            </tbody>

        </Table>

    )

}

export default UserTable;