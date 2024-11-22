"use client"
import React from 'react';

export const mockAddresses = [
  {
    id: 1,
    name: "Nhà riêng",
    address: "123 Đường B, Quận 1, TP.HCM",
  },
  {
    id: 2,
    name: "Công ty",
    address: "456 Đường X, Quận 3, TP.HCM",
  },
  {
    id: 3,
    name: "Nhà bạn thân",
    address: "789 Đường Y, Quận 10, TP.HCM",
  },
];

export const mockOrders = [
  {
    id: 1,
    product: "Áo thun",
    quantity: 2,
    addressId: 1,
    date: "2023-10-01",
  },
  {
    id: 2,
    product: "Giày thể thao",
    quantity: 1,
    addressId: 2,
    date: "2023-10-02",
  },
  {
    id: 3,
    product: "Cặp sách",
    quantity: 1,
    addressId: 3,
    date: "2023-10-03",
  },
];

function App() {
  return (
    <div>
      <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách địa chỉ</h1>
      <ul className="list-disc pl-5 mb-6">
        {mockAddresses.map((address) => (
          <li key={address.id} className="mb-2">
            <strong>{address.name}:</strong> {address.address}
          </li>
        ))}
      </ul>

      <h1 className="text-2xl font-bold mb-4">Danh sách đơn hàng</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Sản phẩm</th>
            <th className="border px-4 py-2">Số lượng</th>
            <th className="border px-4 py-2">Địa chỉ</th>
            <th className="border px-4 py-2">Ngày đặt</th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((order) => {
            const address = mockAddresses.find((addr) => addr.id === order.addressId);
            return (
              <tr key={order.id}>
                <td className="border px-4 py-2">{order.id}</td>
                <td className="border px-4 py-2">{order.product}</td>
                <td className="border px-4 py-2">{order.quantity}</td>
                <td className="border px-4 py-2">{address ? address.address : 'N/A'}</td>
                <td className="border px-4 py-2">{order.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default App;