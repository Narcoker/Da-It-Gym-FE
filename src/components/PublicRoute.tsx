import React from "react";
import { Navigate } from "react-router";

interface PublicRouteProps {
  authenticated: boolean;
  element: React.ReactNode;
}

export default function PublicRoute({ authenticated, element }: PublicRouteProps) {
  const alreadyJoined = localStorage.getItem("alreadyJoined");
  return !authenticated ? (
    element
  ) : !alreadyJoined ? (
    <Navigate to="/signup" />
  ) : (
    <Navigate to="/" />
  );
}
