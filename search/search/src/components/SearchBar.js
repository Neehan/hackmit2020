import React from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const Styles = styled.div`
  .navbar { background-color: #97DA6F; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #8E61C6;
    &:hover { color: #293063; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #8E61C6;
    &:hover { color: #293063; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const SbButton = {
  backgroundColor: '#8E61C6',
  color: '#97DA6F',
  borderRadius: '5px',
  border: '0px',
  marginLeft: '5px'
};

const subjects = [
  'Mathematics',
  'Chemitry',
  'Biology',
  'Computer Science',
  'Physics',
  'Literature', 'Philosophy', 'Economics', 'Lingustics',
];

class SearchButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sub: 'Mathematics'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(val) {
    this.setState(state => ({
      sub: val
    })); 
    /* Insert request here*/
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)} style={SbButton}> 
        Search
      </button>
    )
  }
}

function Searcher() {
  const [value, setValue] = React.useState(subjects[0]);
  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">LOCA Tutoring Matcher</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Autocomplete
	   value={value}
           onChange={(event, newValue) => {
             setValue(newValue);
           }}
           id="subject-selector"
           options={subjects}
           style={{ width: 500, height: 50}}
           renderInput={(params) => <TextField {...params} label="Search a subject" variant="outlined" />} 
        />
        <SearchButton key={value} onClick={(value) => this.handleClick(value)}/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Settings</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/login">Logout</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export const SearchBar = () => (
  <Styles>
    <Searcher />   
  </Styles>
)
