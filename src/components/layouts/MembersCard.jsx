import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function MembersCard({memberImage, membersPhone, membersEmail, memberName, memberDesignation}) {
  return (
      <Card className="executive-card border border-primary text-center">
                                    <Card.Img
                                        variant="top"
                                        src={memberImage}
                                        className="executive-img"
                                        srcSet=' '
                                        style={{ margin: 0, padding: 0 }}
                                    />
                                    <Card.Body>
                                        <h5 className="mb-2">{memberName}</h5>
                                        <p className="newexecutivedesignation small mb-2">
                                            {memberDesignation}
                                        </p>
                                        <hr className="my-2" />
                                        <p className="infoText small mb-2 text-start ps-2" >
                                            <FontAwesomeIcon icon={faPhone} style={{color:"#03A9F4"}} className=" me-2 infoTextIcon" />{membersPhone}
                                        </p>
                                        <p className="text-muted small mb-1 text-start ps-2" style={{color:"#03A9F4"}}>
                                            <FontAwesomeIcon icon={faEnvelope} style={{color:"#03A9F4", fontWeight:"500"}} className=" me-2 infoTextIcon" /> 
                                            {membersEmail}
                                        </p>
                                    </Card.Body>
                                </Card>
  )
}

export default MembersCard