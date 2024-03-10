import { cn } from '../../lib/utils';

function Button({ children, type, link, className = '' }) {
  return type === 'primary' ? (
    <a href={link} rel="noreferrer" target="_blank">
      <button
        className={cn(
          'whitespace-nowrap rounded-xl bg-primary/90 px-3 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black active:bg-primary/90 active:shadow-md',
          className,
        )}
      >
        {children}
      </button>
    </a>
  ) : type === 'secondary' ? (
    <a href={link} rel="noreferrer" target="_blank">
      <button
        className={cn(
          'whitespace-nowrap rounded-xl px-3 py-2 font-bold text-primary shadow-lg ring-2 ring-primary transition-all duration-200 active:shadow-md',
          className,
        )}
      >
        {children}
      </button>
    </a>
  ) : (
    <button
      className={cn(
        'whitespace-nowrap rounded-xl bg-primary/90 px-3 py-2 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-black active:bg-primary/90 active:shadow-md',
        className,
      )}
    >
      {children}
    </button>
  );
}
export default Button;
