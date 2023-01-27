import "bootstrap/dist/css/bootstrap.css";
import Footer from "./footer";
import Nav from "./nav";
import ProvidersWrapper from "./ProvidersWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <ProvidersWrapper>
          <Nav />
          {children}
          <Footer />
        </ProvidersWrapper>
      </body>
    </html>
  );
}
