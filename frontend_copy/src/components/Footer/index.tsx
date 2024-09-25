const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-slate-900 p-3 text-white">
      <p className="">
        App desenvolvido por{' '}
        <a href="https://github.com/LaislaSte" target="_blank" rel="noreferrer">
          Laisla Stephanie
        </a>
      </p>
      <p className="">
        <small>
          <strong>Semana Spring React</strong>
          <br />
          Evento promovido pela escola DevSuperior:{' '}
          <a
            href="https://instagram.com/devsuperior.ig"
            target="_blank"
            rel="noreferrer">
            @devsuperior.ig
          </a>
        </small>
      </p>
    </footer>
  );
};

export default Footer;
