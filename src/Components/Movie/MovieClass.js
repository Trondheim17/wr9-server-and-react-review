import { Component } from "react"
import { withRouter } from "react-router-dom"

class MovieClass extends Component {
  constructor() {
    super()
    this.state = {
      editing: false,
      name: "",
      director: "",
    }
  }

  handleName = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  handleDirector = (e) => {
    this.setState({
      director: e.target.value,
    })
  }

  handleSave = () => {
    const { name, director } = this.state
    this.props.editMovie(this.props.movie.movie_id, { name, director })
    this.setState({
      editing: false,
      name: "",
      director: "",
    })
  }

  render() {
    const { movie, deleteMovie } = this.props
    return (
      <div key={movie.movie_id}>
        {this.state.editing ? (
          <div>
            <input
              value={this.state.name}
              onChange={(e) => this.handleName(e)}
            />
            <input
              value={this.state.director}
              onChange={(e) => this.handleDirector(e)}
            />
            <button onClick={() => this.handleSave()}>Save</button>
          </div>
        ) : (
          <div>
            <span>{movie.name}</span>
            <button
              onClick={() =>
                this.props.history.push(`/movie/${movie.movie_id}`)
              }
            >
              View Movie with id {movie.movie_id}
            </button>
            <button onClick={() => this.setState({ editing: true })}>
              Edit
            </button>
            <button onClick={() => deleteMovie(movie.movie_id)}>X</button>
          </div>
        )}
      </div>
    )
  }
}

export default withRouter(MovieClass)
