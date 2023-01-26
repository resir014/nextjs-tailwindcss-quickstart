import * as React from 'react';

export interface PageHeaderProps
  extends Omit<React.ComponentPropsWithoutRef<'header'>, 'children'> {
  pageTitle: string;
}

export function PageHeader({ className, pageTitle, ...rest }: PageHeaderProps) {
  return (
    <header className={className} {...rest}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          {pageTitle}
        </h1>
      </div>
    </header>
  );
}
