import React from 'react';
import Spinner from '../Spinner/Spinner';

export default function Loading({ isLoading, children }) {
	return isLoading ? <Spinner /> : children;
}
