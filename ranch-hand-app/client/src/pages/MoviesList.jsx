import React, { Component } from "react";
import ReactTable from "react-table-6";
import api from "../api";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "react-table-v6/react-table.css";

const Wrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Update = styled.div`
  color: #ef9b0f;
  cursor: pointer;
`;

const Delete = styled.div`
  color: #ff0000;
  cursor: pointer;
`;

// update fields
class UpdateMovie extends Component {
  updateUser = (event) => {
    event.preventDefault();

    window.location.href = `/movies/update/${this.props.id}`;
  };

  render() {
    return <Update onClick={this.updateUser}>Update</Update>;
  }
}

// delete field
class DeleteUser extends Component {
  deleteUser = (event) => {
    event.preventDefault();

    if (
      window.confirm(
        `Do tou want to delete the movie ${this.props.id} permanently?`
      )
    ) {
      api.deleteMovieById(this.props.id);
      window.location.reload();
    }
  };

  render() {
    return <Delete onClick={this.deleteUser}>Delete</Delete>;
  }
}

// list fields in table... need better way to display, working on displaying in cards.

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      columns: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getAllMovies().then((movies) => {
      this.setState({
        movies: movies.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { movies, isLoading } = this.state;
    console.log("TCL: MoviesList -> render -> movies", movies);

    const columns = [
      {
        Header: "ID",
        accessor: "_id",
        filterable: true,
      },
      {
        Header: "Name",
        accessor: "name",
        filterable: true,
      },
      {
        Header: "Rating",
        accessor: "rating",
        filterable: true,
      },
      {
        Header: "Time",
        accessor: "time",
        Cell: (props) => <span>{props.value.join(" / ")}</span>,
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return <span>{/* <DeleteMovie id={props.original._id} /> */}</span>;
        },
      },
      {
        Header: "",
        accessor: "",
        Cell: function (props) {
          return (
            <span>
              <UpdateMovie id={props.original._id} />
            </span>
          );
        },
      },
    ];

    let showTable = true;
    if (!movies.length) {
      showTable = false;
    }

    return (
      <Wrapper>
        <Container fluid="md">
          <Row>
            <Col>
              {showTable && (
                <ReactTable
                  data={movies}
                  columns={columns}
                  loading={isLoading}
                  defaultPageSize={10}
                  showPageSizeOptions={true}
                  minRows={0}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Wrapper>
    );
  }
}

export default UserList;
