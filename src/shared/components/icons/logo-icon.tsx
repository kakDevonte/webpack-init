import React from 'react';

export const LogoIcon = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  (props, ref) => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='47'
      height='30'
      viewBox='0 0 47 30'
      fill='none'
      stroke='currentColor'
      {...props}
      ref={ref}
    >
      <g clipPath='url(#clip0_269_8428)'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M3.66746 19.1483H8.55964V7.53906H12.2484V19.1483H14.3563L13.8817 24.0272H10.547V22.4503H0V7.53906H3.66746V19.1483ZM22.4138 22.4606H26.0916V21.3498C29.9771 21.3498 32.9789 19.2313 32.9789 15.0954C32.9789 11.0026 29.9474 8.84105 26.0916 8.84105V7.53929H22.4138V8.84105C18.5261 8.84105 15.5264 10.9554 15.5264 15.0954C15.5264 19.2062 18.5454 21.3498 22.4138 21.3498V22.4606ZM26.0916 18.3147V11.8765C28.1259 11.8765 29.5566 12.9498 29.5566 15.0954C29.5566 17.2628 28.1435 18.3147 26.0916 18.3147ZM18.9274 15.0954C18.9274 12.9494 20.3845 11.8765 22.4138 11.8765V18.3147C20.3673 18.3147 18.9274 17.2636 18.9274 15.0954ZM46.4721 7.53929H34.243V10.8644H38.4909V22.4606H42.2028V10.8644H46.4721V7.53929Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_269_8428'>
          <rect width='46.2562' height='29.8427' fill='white' transform='translate(0 0.0786133)' />
        </clipPath>
      </defs>
    </svg>
  )
);
