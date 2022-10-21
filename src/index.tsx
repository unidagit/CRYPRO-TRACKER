import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        {/* ThemeProvider 안에 theme이라는 스타일 함께 적용 */}
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);
