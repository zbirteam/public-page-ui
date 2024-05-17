// import { StaticImageData } from 'next/image';
import React, { type MouseEventHandler } from 'react';

interface ButtonLinkInterface {
  href?: string;
  style?: ButtonStyle;
  size?: ButtonSize;
  disabled?: boolean;
  target?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler;
  className?: string;
}

export default function ButtonLink({
  href = undefined,
  style = ButtonStyle.Primary,
  size = ButtonSize.Large,
  disabled = false,
  target = undefined,
  className = undefined,
  icon = undefined,
  onClick = undefined,
  children,
}: ButtonLinkInterface): React.JSX.Element {
  const buttonCommonStyles =
    'inline-flex gap-1 justify-center items-center text-center cursor-pointer whitespace-nowrap';
  const iconCommonStyles = 'inline-block w-4 h-4';

  const buttonStyles: string[] = [buttonCommonStyles];
  const iconStyles: string[] = [iconCommonStyles];
  if (!disabled) {
    buttonStyles.push(
      style === ButtonStyle.Primary
        ? PrimaryStyle.Enabled
        : SecondaryStyle.Enabled,
    );
  } else {
    buttonStyles.push(
      style === ButtonStyle.Primary
        ? PrimaryStyle.Disabled
        : SecondaryStyle.Disabled,
    );
  }

  switch (size) {
    case ButtonSize.Small:
      buttonStyles.push(SizeStyle.Small);
      break;
    case ButtonSize.Large:
      buttonStyles.push(SizeStyle.Large);
      iconStyles.push('md:w-6 md:h-6');
      break;
  }

  if (className) {
    buttonStyles.push(className);
  }

  return (
    <a
      className={buttonStyles.join(' ')}
      href={href}
      onClick={onClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
      target={target}>
      {icon ? <div className={iconStyles.join(' ')}>{icon}</div> : undefined}
      {children}
    </a>
  );
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
}

enum PrimaryStyle {
  Enabled = 'text-black bg-zb-primary-100 hover:bg-zb-primary-200 focus:ring-4 focus:ring-zb-primary-400',
  Disabled = 'text-zb-disabled bg-zb-primary-500 hover:bg-zb-primary-500 focus:ring-4 focus:ring-zb-primary-500 cursor-not-allowed',
}

enum SecondaryStyle {
  Enabled = 'border bg-zb-main text-white border-white hover:border-zb-primary-200 hover:text-zb-primary-200 focus:ring-4 focus:ring-white',
  Disabled = 'text-black bg-zb-secondary-200 hover:bg-zb-secondary-100 focus:ring-4 focus:ring-zb-secondary-100 cursor-not-allowed',
}

export enum ButtonSize {
  Small = 'small',
  Large = 'large',
}

enum SizeStyle {
  Small = 'shadow-sm font-medium rounded-md text-xs leading-none px-2.5 py-2',
  Large = 'shadow-lg font-medium rounded-lg text-sm leading-none px-6 py-3.5 md:px-7 md:py-[1.0625rem] md:text-xl md:rounded-xl md:leading-none',
}
