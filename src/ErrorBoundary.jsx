import { Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  state = { hasEror: false };
  static getDerivedStateFromError() {
    return { hasEror: true };
  }

  componetDidCatch(error, info) {
    // typically you would log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught an error", error, info);
  }

  render() {
    if (this.state.hasEror) {
      return (
        <h2>
          There was an error with this listing. <Link to="/">Click here</Link>
          {""}
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
