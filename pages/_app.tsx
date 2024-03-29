import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DarkThemeToggle, Flowbite } from "flowbite-react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Flowbite>
      <Component {...pageProps} />
    </Flowbite>
  );
}
