import React from "react";
import { Navigate } from "react-router";

interface PublicRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
}

export default function PublicRoute({ authenticated, element }: PublicRouteProps) {
  return !authenticated ? element : <Navigate to="/" />;
}
