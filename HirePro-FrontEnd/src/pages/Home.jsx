import { Button } from '@mui/material';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <div>Get hired or hire people for free !</div>
        <div>
          <ul>
            <li>
                <Button>
                    <Link to="/employer/dashboard">
                        Hire!
                    </Link>
                </Button>
            </li>
            <li>
                <Button>
                    <Link to="/employee/feed">
                        Job!
                    </Link>
                </Button>
            </li>
          </ul>
        </div>
      </>
    );
  }
}
