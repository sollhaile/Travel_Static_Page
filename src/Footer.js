import React from "react";

export default function Footer(){

    return(
        <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Solomon Haile.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </footer>
    );
}