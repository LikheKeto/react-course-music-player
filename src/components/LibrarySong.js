import React from 'react';

const LibrarySong = ({
	songs,
	song,
	setCurrentSong,
	audioRef,
	isPlaying,
	setSongs,
}) => {
	const songSelectHandler = async () => {
		setCurrentSong(song);
		//add active state
		const newSongs = songs.map((s) => {
			if (s.id === song.id) {
				return {
					...s,
					active: true,
				};
			} else {
				return {
					...s,
					active: false,
				};
			}
		});
		await setSongs(newSongs);
	};

	//check if playing
	if (isPlaying) audioRef.current.play();

	return (
		<div
			onClick={songSelectHandler}
			className={`library-song ${song.active ? 'selected' : ''}`}
		>
			<img src={song.cover} alt={song.name}></img>
			<div className="song-description">
				<h3>{song.name}</h3>
				<h4>{song.artist}</h4>
			</div>
		</div>
	);
};

export default LibrarySong;
