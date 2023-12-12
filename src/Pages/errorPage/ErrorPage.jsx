import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 text-center mt-5">
          <h1 className="display-4">404 - Not Found</h1>
          <p className="lead">
            The page you are looking for might be in another castle.
          </p>
          <Link to="/" className="btn btn-primary mt-3">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
