import clsx from 'clsx';
import * as React from 'react';

export function Page({ className, children, ...rest }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className={clsx('py-10', className)} {...rest}>
      {children}
    </div>
  );
}
