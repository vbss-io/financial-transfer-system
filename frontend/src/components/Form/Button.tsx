import { useState, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: 'primary' | 'secondary' | 'none';
}

export default function Button({buttonStyle, className, ...props}: ButtonProps) {
  const [buttonStyles] = useState({
    primary: 'bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-violet-600 ',
    secondary: 'bg-zinc-900 px-5 h-12 rounded-md font-semibold flex items-center justify-center gap-3 hover:bg-zinc-800 ',
    none: ''
  });

  return (
    <button
      {...props}
      className={buttonStyles[buttonStyle] + className}
    />
  )
}