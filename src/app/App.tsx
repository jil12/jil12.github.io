import { RouterProvider } from 'react-router';
import { router } from './routes';

function App() {
  return (
    <div className="min-h-screen bg-[var(--canvas)] relative">
      {/* Global Background Pattern */}
      <div className="global-background-pattern" />
      
      {/* Content */}
      <div className="relative z-10">
        <RouterProvider
          router={router}
          fallbackElement={<div className="min-h-screen" />}
        />
      </div>
    </div>
  );
}

export default App;