const Footer = ({ length }) => {
  return (
    <footer>
      <h2>
        {length} list {length === 1 ? "item" : "items"}
      </h2>
    </footer>
  );
};

export default Footer;
