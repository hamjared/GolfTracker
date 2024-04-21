import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Golf-Tracker",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Link href="/"><Button>Home</Button></Link>
          </Container>

        </Navbar>
        <Container className='my-4'>
           {children}
        </Container>
        
      </body>
    </html>
  );
}
