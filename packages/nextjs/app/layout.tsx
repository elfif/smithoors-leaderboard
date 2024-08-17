import "@rainbow-me/rainbowkit/styles.css";
import { ThemeProvider } from "~~/components/ThemeProvider";
import { ApolloHoc } from "~~/components/hoc/apollo";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Smithoors leaderboard",
  description: "Top 200 Smithoors in the whole GotchiVerse",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider enableSystem>
          <ApolloHoc>
            <div className="flex flex-col min-h-screen justify-between bg-purple-950  text-white font-katin font-medium">
              <div className="container mx-auto mb-auto md:pt-20 pt-10">
                <div className="mx-5">{children}</div>
              </div>
            </div>
          </ApolloHoc>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
