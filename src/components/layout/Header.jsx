import React from 'react';
import { Bell, Search } from 'lucide-react';
import ConnectWalletButton from '../ui/ConnectWalletButton';
import { useWallet } from '../../context/WalletContext';
import { truncateAddress } from '../../utils/helpers';

const Header = () => {
  const { address } = useWallet();

  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6">
      <div className="flex items-center justify-between h-full">
        {/* Search Section */}
        <div className="relative w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {address && (
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>Connected as:</span>
              <span className="font-medium">{truncateAddress(address)}</span>
            </div>
          )}

          <button
            className="relative p-2 text-gray-400 hover:text-gray-500 rounded-full hover:bg-gray-100"
            onClick={() => console.log('Notifications clicked')}
          >
            <Bell className="h-6 w-6" />
            <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full"></span>
          </button>

          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
};

export default Header;