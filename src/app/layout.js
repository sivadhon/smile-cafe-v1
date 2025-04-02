
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import BackToTop from "@/components/common/BackToTop";
import LoaderProvider from "@/components/common/loader-provider/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LoaderProvider>
          {children}
        </LoaderProvider>
        <BackToTop />
      </body>
    </html>
  );
}
