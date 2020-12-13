import React from 'react';
import { connect } from "react-redux";

// export default function SearchBar() {
//   const search = (props)=> {
    
//   }
//   return (
//     <div>
//       <form>
//       <input type="text" placeholder="Search products..." />
//       <button type="submit" onClick={search}>Buscar</button>
//     </form>
//     </div>
    
//   );
// }

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
  }
  render() {
    //const { search } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            id="search"
            value={search}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">BUSCAR</button>
      </form>
    );
  }
}