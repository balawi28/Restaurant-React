import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({
	condition,
	redirectPath = '/',
	children,
}) {
	return condition ? children : <Navigate to={redirectPath} replace />;
}
