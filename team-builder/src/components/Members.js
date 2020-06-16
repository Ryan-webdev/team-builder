import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

const Members = props => {
    return(
            <div >
                {props.engineer.map(member => (
                    <Row style={{margin: '0 35%'}} >
                        <Col sm='11' style={{margin: '2%'}}>
                            <Card body>
                <div className="member" key={member.id}>
                    <h2>{member.name}</h2>
                    <p>{member.title}</p>
                    <p>{member.email}</p>
                </div>
                            </Card>
                        </Col>
                    </Row>
                ))}
            </div>
   
    );
}
export default Members