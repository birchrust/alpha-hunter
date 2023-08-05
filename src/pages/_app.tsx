import "~/styles/globals.css";
import { api } from "~/utils/api";
import { SSRProvider } from "react-aria";
import { type Session } from "next-auth";
import { type AppType } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider
        attribute="class"
        value={{
          light: "light-theme",
          dark: "dark-theme",
        }}
      >
        <SSRProvider>
          <Component {...pageProps} />
        </SSRProvider>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
