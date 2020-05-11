import React, {useState} from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Form.css';


const Forms = props => {
    const [members, setMembers] = useState (
        {
            id: Date.now(),
            name: '',
            title: '',
            email: ''
        }
    );
    const clearForm = () => {
        setMembers({id: Date.now(), name: '', title: '', email: ''})
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(members);
        clearForm();
    }

    const handleChange= (event) => {
        setMembers({...members, [event.target.name]: event.target.value})
    }




    return(
        <Container>
        <Form onSubmit={handleSubmit}>
            <FormGroup>
            <Row style={{margin: "0 25%"}}>
                <Label htmlFor="name" >Team Members Name: </Label>
                
                    <Input 
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Team members name here: "
                        value={members.name}
                        onChange={handleChange}
                    />
                
                </Row>
                
        </FormGroup>
        <FormGroup>
        <Row style={{margin: "0 25%"}}>
            <Label htmlFor="title">Team Members title: </Label>
            <Input 
                id="title"
                name="title"
                type="text"
                placeholder="Team members title here: "
                value={members.title}
                onChange={handleChange}
            />
        </Row>
        </FormGroup>
        <FormGroup>
        <Row style={{margin: "0 25%"}}>
            <Label htmlFor="email">Team Members email: </Label>
            <Input 
                id="email"
                name="email"
                type="text"
                placeholder="Team members email here: "
                value={members.email}
                onChange={handleChange}
            />
        </Row>
        </FormGroup>
        <Button type="submit">Save info</Button>
        </Form>
        </Container>
    );
}

export default Forms