import React, { Component } from "react";
import characters from "./dt-dwd-clickgame/public/characters.json";
import "./src/components/characters/characters.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters:this.state.characters,
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(characters => characters.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Character List</Title>
        {this.state.characters.map(characters => (
          <characters
            clickCharacter={this.clickCharacter}
            id={characters.id}
            key={characters.id}
            name={characters.name}
            image={characters.image}
            occupation={characters.occupation}
            location={characters.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
