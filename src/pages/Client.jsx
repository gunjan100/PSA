
import { Datagrid, DeleteButton, EditButton, List, TextField } from 'react-admin';

const Client = (props) => {
  return(
    <List {...props}>
     <Datagrid>
      <TextField source='id'/>
      <TextField source='companyname'/>
      <TextField source='address'/>
      <TextField source='cqno'/>
      <TextField source='status'/>
      <TextField source='issuedate'/>
      <TextField source='expirydate'/>
      <EditButton basePath="/clients"/>
      <DeleteButton basePath="/clients" />

     </Datagrid>
    </List>
  )

 
};


export default Client
