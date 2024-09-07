import React from 'react';

const Counter: React.FC = () => {
  return (
    <div className="counter-section py-12 bg-gray-100">
        <div className="flex flex-wrap">
          <div className="count-left-side w-full md:w-1/2 px-4">
            <h1 className="text-4xl font-bold mb-4">Burada rəqəmlər danışır!</h1>
          </div>

          <div className="count-right-side w-full md:w-1/2 px-4">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold">No-1</h1>
                <p>Ölkəmizdə ən çox tələbə sayına malik özəl tədris müəssisəsi</p>
              </div>

              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold">No-1</h1>
                <p>Ölkəmizdə ən çox tələbə sayına malik özəl tədris müəssisəsi</p>
              </div>

              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold">No-1</h1>
                <p>Ölkəmizdə ən çox tələbə sayına malik özəl tədris müəssisəsi</p>
              </div>

              <div className="w-full md:w-1/2 p-4">
                <h1 className="text-2xl font-bold">No-1</h1>
                <p>Ölkəmizdə ən çox tələbə sayına malik özəl tədris müəssisəsi</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Counter;
