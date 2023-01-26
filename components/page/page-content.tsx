import * as React from 'react';

export function PageContent({
  className,
  children,
  ...rest
}: React.ComponentPropsWithoutRef<'main'>) {
  return (
    <main className={className} {...rest}>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</div>
    </main>
  );
}
