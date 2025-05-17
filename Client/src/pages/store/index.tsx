import storeItems from '@/data/items.json';
import StoreItems from './details';

const Store = () => {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {storeItems.map((item) => (
          <div key={item.id}>
            <StoreItems {...item} id={item.id} quantity={0} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;
