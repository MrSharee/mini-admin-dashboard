import { Toaster } from "react-hot-toast";

function AppToaster() {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "var(--color-surface)",
          color: "var(--color-text)",
          border: "1px solid var(--color-border)",
          fontSize: "12px",
        },

        success: {
          iconTheme: {
            primary: "var(--color-success)",
            secondary: "var(--color-surface)",
          },
        },

        error: {
          iconTheme: {
            primary: "var(--color-danger)",
            secondary: "var(--color-surface)",
          },
        },
      }}
    />
  );
}

export default AppToaster;