import React, {Component} from 'react';

import './assets/css/styles.css';
import Avatar from './components/Avatar';

class App extends Component {

	constructor() {
		super();
		this.state = {
			usuarios: [
				{id: 0, name: "Lucas", isBot: true, isFollowing: false},
				{id: 1, name: "Matias", isBot: false, isFollowing: true},
				{id: 2, name: "Juan", isBot: false, isFollowing: true},
				{id: 3, name: "Micaela", isBot: true, isFollowing: false},
				{id: 4, name: "Marcela", isBot: true, isFollowing: false},
			]
		};
	}

	handleOnToggleFollow(user) {
		return () => {
			let followingNewValue = !user.isFollowing;

			const newUsersArray = Array.from(this.state.usuarios);
			newUsersArray[user.id].isFollowing = followingNewValue;

			console.log(newUsersArray)

			this.setState({
				usuarios: newUsersArray
			});

		};
	}

	render() {
		return (
			<>
				{
					this.state.usuarios.map((usuario, i)=> 
						<Avatar 
							id= {i}
							name= {usuario.name}
							isBot= {usuario.isBot}
							isFollowing= {usuario.isFollowing}
							onToggleFollow= {this.handleOnToggleFollow(usuario)}
							key={"avatar-"+i}
						/>
					)
	
				}	
			</>
		);
	};
}

export default App;
