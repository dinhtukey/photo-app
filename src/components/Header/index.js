import React from 'react';
import PropTypes from 'prop-types';
import { Container, Col, Row } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './Header.scss';

index.propTypes = {
    
};

function index(props) {
    return (
        <header className="header">
            <Container>
                <Row className="justify-content-between">
                    <Col xs="auto">
                        <a className="header__link header__title">
                            Photos beaty
                        </a>
                    </Col>

                    <Col xs="auto">
                        <NavLink className="header__link" to="/signin" activeClassName="header__link--active">
                            Sign in
                        </NavLink>
                    </Col>
                </Row>
            </Container>

        </header>
    );
}

export default index;