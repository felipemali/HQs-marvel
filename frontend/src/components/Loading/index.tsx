import { ClockLoader } from "react-spinners";

const spinnerContainer: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const override: React.CSSProperties = {
  display: "block",
  margin: "auto",
  border: "2px solid red",
};
export const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <div style={spinnerContainer}>
      <ClockLoader
        color="red"
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};
