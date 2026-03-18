import * as React from 'react';
import { cn } from '@/lib/utils';

const Card = React.forwardRef(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            'rounded-[2.5rem] border border-border bg-card text-card-foreground shadow-sm transition-all overflow-hidden',
            className
        )}
        {...props}
    />
));

Card.displayName = 'Card';

export { Card };
