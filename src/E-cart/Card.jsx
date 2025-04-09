export function Card({ children, className }) {
    return (
      <div className={`bg-white shadow-lg rounded-lg ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardHeader({ children, className }) {
    return (
      <div className={`p-4 border-b ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardContent({ children, className }) {
    return (
      <div className={`p-4 ${className}`}>
        {children}
      </div>
    );
  }
  
  export function CardFooter({ children, className }) {
    return (
      <div className={`p-4 border-t flex justify-center ${className}`}>
        {children}
      </div>
    );
  }
  