'use client';

import { SearchManufacturer } from './';

import { useState } from 'react';

const SearchBar = () => {
	const [manufacturer, setManfacturer] = useState('second');

	const handleSearch = () => {};

	return (
		<form className='searchbar' onSubmit={handleSearch}>
			<div className='searchbar__item'>
				<SearchManufacturer manufacturer={manufacturer} setManufacturer={setManfacturer} />
			</div>
		</form>
	);
};

export default SearchBar;
