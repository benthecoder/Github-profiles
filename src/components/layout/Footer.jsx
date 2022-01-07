function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer p-7 bg-gray-700 shadow-xl text-primary-content footer-center'>
      <div>
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
