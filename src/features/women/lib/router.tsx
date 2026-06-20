import { useNavigate as useRRNavigate, useParams, useLocation, Link as RRLink, Navigate as RRNavigate } from "react-router";
import React from 'react';

export function useNavigate() {
  const navigate = useRRNavigate();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === 'number') {
      navigate(to);
    } else {
      const finalTo = to.startsWith('/') ? `/women${to}` : to;
      navigate(finalTo, options);
    }
  }
}

export function Navigate({ to, replace }: { to: string, replace?: boolean }) {
  const finalTo = to.startsWith('/') ? `/women${to}` : to;
  return <RRNavigate to={finalTo} replace={replace} />;
}

export function Link({ to, replace, children, className, ...props }: any) {
  const finalTo = typeof to === 'string' && to.startsWith('/') ? `/women${to}` : to;
  return (
    <RRLink to={finalTo} replace={replace} className={className} {...props}>
      {children}
    </RRLink>
  );
}

export function NavLink({ to, className, children, ...props }: any) {
  const finalTo = typeof to === 'string' && to.startsWith('/') ? `/women${to}` : to;
  const location = useLocation();
  const isActive = location.pathname === finalTo || location.pathname.startsWith(finalTo + "/");
  
  const resolvedClassName = typeof className === 'function' 
    ? className({ isActive }) 
    : className;
    
  return (
    <RRLink to={finalTo} className={resolvedClassName} {...props}>
      {children}
    </RRLink>
  );
}

export { useParams, useLocation };
