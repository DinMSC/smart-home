import { ReactNode } from 'react';
import PageHeader from '../components/PageHeader';

interface PageLayoutProps {
  children?: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div>
      <header className='w-full'>
        <PageHeader />
      </header>

      <div className='h-[calc(100vh-70px)] overflow-auto bg-black'>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
