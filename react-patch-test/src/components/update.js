import { Link } from 'react-router-dom';
import { Table, Button } from 'semantic-ui-react'

export default function Update() {

const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
}

<Link to='/update'>
    <Table.Cell> 
        <Button onClick={() => setData()}>Update</Button>
    </Table.Cell>
</Link>
}