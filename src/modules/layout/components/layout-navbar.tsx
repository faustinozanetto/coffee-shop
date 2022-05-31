import ShopLogo from '@modules/branding/components/shop-logo';
import React from 'react';

interface ILayoutNavbarProps {}

const LayoutNavbar: React.FC<ILayoutNavbarProps> = (props) => {
  const {} = props;

  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur">
      <div className="max-w-8xl mx-auto">
        <div className="py-2 border-b border-slate-900">
          {/* Content */}
          <div className="flex justify-center  items-center">
            <ShopLogo size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutNavbar;
