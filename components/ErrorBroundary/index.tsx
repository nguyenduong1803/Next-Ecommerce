"use client";
import { ErrorInfo, Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: null | Error;
  errorInfo: null | ErrorInfo;
}
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(errorInfo);
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div className="h-[100vh] flex p-6">
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
}
export default ErrorBoundary;
