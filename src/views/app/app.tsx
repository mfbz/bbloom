import React from 'react';
import { useMediaQuery } from 'react-responsive';

export const App = React.memo(function App() {
	const isSmallScreenOrMobile = useMediaQuery({ query: '(max-width: 992px)' });

	// If no user show loading indicator until conected, otherwise show real app wrapper passing the user to be sure it's present
	return null;
});
