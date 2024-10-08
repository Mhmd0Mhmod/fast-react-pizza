import { Link } from 'react-router-dom';

function Button({ type, disabled, to, children, onClick }) {
  const base =
    'inline-block  text-sm rounded-full bg-yellow-400  font-semibold text-stone-800 uppercase transition-colors duration-300  hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: `${base} md:px-6 md:py-4 px-4 py-3 `,
    small: `${base} px-4 py-2 sm:px-5 sm:py-2.5 text-xs`,
    round: `${base} px-2.5 py-1 sm:px-3.5 sm:py-2 text-sm`,
    secondary:
      'inline-block  md:px-6 md:py-3.5 px-4 py-2.5  rounded-full border-2 borde-stone-300 text-stone-400  font-semibold uppercase transition-colors duration-300 hover:text-stone-800 hover:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick || null}
      disabled={disabled}
      className={styles[type]}
    >
      {children}
    </button>
  );
}

export default Button;
