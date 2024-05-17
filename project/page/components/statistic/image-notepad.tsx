import React from 'react';

export function ImageNotepad({
  className = '',
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 22 22'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        clipRule='evenodd'
        d='M3.17827 18.8055C2.99611 18.8055 2.8214 18.7281 2.69259 18.5903C2.56378 18.4524 2.49142 18.2655 2.49142 18.0705V3.37054C2.49142 3.17561 2.56378 2.98866 2.69259 2.85082C2.8214 2.71298 2.99611 2.63554 3.17827 2.63554H15.8851C16.1584 2.63554 16.4204 2.51939 16.6136 2.31263C16.8069 2.10587 16.9154 1.82544 16.9154 1.53304C16.9154 1.24064 16.8069 0.960216 16.6136 0.753457C16.4204 0.546698 16.1584 0.430542 15.8851 0.430542H3.17827C2.44961 0.430542 1.75079 0.740291 1.23555 1.29165C0.720307 1.84301 0.430847 2.59081 0.430847 3.37054V18.0705C0.430847 18.8503 0.720307 19.5981 1.23555 20.1494C1.75079 20.7008 2.44961 21.0105 3.17827 21.0105H16.9154C17.6441 21.0105 18.3429 20.7008 18.8581 20.1494C19.3734 19.5981 19.6628 18.8503 19.6628 18.0705V13.293C19.6628 13.0006 19.5543 12.7202 19.3611 12.5135C19.1679 12.3067 18.9058 12.1905 18.6325 12.1905C18.3593 12.1905 18.0972 12.3067 17.904 12.5135C17.7108 12.7202 17.6023 13.0006 17.6023 13.293V18.0705C17.6023 18.2655 17.5299 18.4524 17.4011 18.5903C17.2723 18.7281 17.0976 18.8055 16.9154 18.8055H3.17827ZM20.7343 5.84014C20.9163 5.63114 21.0154 5.35472 21.0107 5.06909C21.006 4.78347 20.8978 4.51096 20.7091 4.30896C20.5203 4.10696 20.2656 3.99125 19.9987 3.98621C19.7318 3.98118 19.4735 4.0872 19.2782 4.28194L11.6431 12.4507L9.07013 9.60481C8.97626 9.49985 8.86392 9.41577 8.73958 9.35742C8.61524 9.29907 8.48135 9.26759 8.3456 9.2648C8.20985 9.262 8.07493 9.28795 7.94858 9.34114C7.82224 9.39434 7.70696 9.47373 7.60939 9.57475C7.51181 9.67578 7.43386 9.79644 7.38001 9.92982C7.32616 10.0632 7.29747 10.2066 7.2956 10.3519C7.29373 10.4972 7.31871 10.6414 7.36911 10.7763C7.41951 10.9112 7.49433 11.0342 7.58927 11.138L10.8903 14.7895C10.9853 14.8949 11.0989 14.979 11.2246 15.0369C11.3503 15.0948 11.4855 15.1253 11.6224 15.1267C11.7592 15.1281 11.8949 15.1003 12.0216 15.0449C12.1483 14.9895 12.2634 14.9077 12.3602 14.8042L20.7343 5.84014Z'
        fill='#47573E'
        fillRule='evenodd'
      />
    </svg>
  );
}
